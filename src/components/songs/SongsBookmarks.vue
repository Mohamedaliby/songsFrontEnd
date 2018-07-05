<template>
    <panel title="Bookmarks">
    <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="bookmarks">
        <template slot="items" slot-scope="props">
            <td class="text-xs-right">
                {{props.item.title}}
            </td>
            <td class="text-xs-right">
                {{props.item.artist}}
            </td>
        </template>
    </v-data-table>
    </panel>
</template>

<script>
import Panel from "../global/Panel";
import { mapState } from "vuex";
import bookmarkService from "@/services/bookmarkService";

export default {
  components: {
    Panel
  },
  data() {
    return {
      headers: [
        {
          text: "Title",
          value: "title"
        },
        {
          text: "Artist",
          value: "title"
        }
      ],
      pagination: {
        sortBy: "date",
        descending: true
      },
      bookmarks: [],
    };
  },
  computed: {
    ...mapState(["isLoggedin", "user"])
  },
  async mounted() {
    if (!this.isLoggedin) {
      console.log('not logged in');
      return;
    }
    try {
      console.log("bookmarks");
      this.bookmarks = (await bookmarkService.index({})).data;
      console.log(this.bookmarks)
    } catch (error) {}
  }
};
</script>

<style>

</style>
