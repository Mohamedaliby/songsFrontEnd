<template>
    <v-container fluid grid-list-lg>
    <v-layout row wrap>
        <v-flex xs3>
            <v-card-media
            :src="song.albumImage"
            height="100px"
            width="100px"
            contain
        ></v-card-media>
        </v-flex>
        <v-flex xs3 md6>
        <div>
            <div class="headline">{{song.title}}</div>
            <div class="grey--text darken-4">{{song.artist}}</div>
        </div>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs4 md2>
        <v-btn v-if="isLoggedin && isBookmarked"
            fab class="bookmark"
            medium flat color="yellow"
            @click="unbookmark">
            <v-icon>star</v-icon>
        </v-btn>
            <v-btn v-if="isLoggedin && !isBookmarked"
            flat fab class="bookmark"
            medium color="grey"
            @click="bookmark">
            <v-icon>star</v-icon>
        </v-btn>
        <v-btn 
            :to="{name:'song', params:{id:song.id}}"
            small flat color="teal">
            View
        </v-btn>
        </v-flex>
    </v-layout>
    </v-container>  
</template>

<script>
//  :to="{path:`songs/${song.id}`, params:{song:song}}"
import { mapState } from "vuex";
import bookmarkService from "@/services/bookmarkService";

export default {
  props: ["song"],
  data() {
    return {
      bookmarkId: null,
      isBookmarked: false
    };
  },
  methods: {
      // only for debugging
    // async bookmarksIndex() {
    //  const response = await bookmarkService.getall()
    //  console.log(response.data)
    // },

    async bookmark() {
      try {
        const userId = this.user.id;
        const songId = this.song.id;
        const response = await bookmarkService.post({ songId, userId })
        let bookmark = response.data;
        this.bookmarkId = response.data.id;
        this.isBookmarked = !!bookmark;
        console.log(this.isBookmarked);
        console.log("bookmarked ");
      } catch (error) {}
    },
    async unbookmark() {
      try {
        let id = this.bookmarkId;
        console.log(this.isBookmarked);
        console.log(this.bookmarkId);
        await bookmarkService.delete(id);
        this.isBookmarked = !this.isBookmarked;
        console.log("unbookmarked ");
      } catch (error) {}
    }
  },
  watch: {},
  computed: {
    ...mapState(["isLoggedin", "user"])
  },
  async mounted() {
    if (!this.isLoggedin) {
      return;
    }
    try {
      const userId = this.user.id;
      const songId = this.song.id;
      console.log({ songId, userId });
      const response = await bookmarkService.index({ songId });
      console.log(response.data);
      console.log(`bookmark:  ${response.data}`);
      if (response.data) {
        this.isBookmarked = true;
      }
      this.bookmarkId = response.data.id;
      console.log(this.bookmarkId);
      console.log(this.isBookmarked);
    } catch (error) {}
  }
};
</script>

<style scoped>
.bookmark {
  margin-left: 25px;
  margin-top: 0;
}
</style>
