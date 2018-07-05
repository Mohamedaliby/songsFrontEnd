<template>
  <v-layout row wrap pt-2 justify-center align-center>
    <v-flex xs12 sm8 md6>
      <panel title="History">
      <v-data-table
           class="text-xs-right"
          :headers="headers"
          :pagination.sync="pagination"
          :items="history">
          <template slot="items" slot-scope="props">
              <td class="text-xs-right">
                  {{props.item.title}}
              </td>
              <td class="text-xs-right grey--text darken-4">
                  {{props.item.artist}}
              </td>
          </template>
      </v-data-table>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "./global/Panel";
import { mapState } from "vuex";
import HistoryService from "@/services/historyService";

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
      history: [],
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
      console.log(this.user.id)
      this.history = (await HistoryService.index({})).data;
      console.log(this.history)
    } catch (error) {}
  }
};
</script>

<style>

</style>
