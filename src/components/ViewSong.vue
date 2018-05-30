<template>
  <v-layout pt-3 row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          :src="song.albumImage"
          height="200px"
          color="grey lighten-4"
        >
        </v-card-media>
         <v-avatar
          class="img"
          :tile= "tile"
          size= "200px"
          color="grey lighten-4"
        >
        <img :src="song.albumImage" alt="avatar">
        </v-avatar>
        <v-card-title primary-title>
          <div class="song-details pl-1 pr-1">
            <div class="headline">{{song.title}}</div>
            <span class="grey--text">{{song.artist}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
           {{song.lyrics}}
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongsService'
    export default {
     components: {
      
     },
      data: () => ({
      tile: true,
      show: false,
      song: {}
    }),

    async mounted () {
      // console.log(this.$route.params)
         const id = this.$store.state.route.params.id
         console.log(id)
         const response = await SongService.show(id)
         this.song = response.data
         console.log (this.song)
     }
    }
</script>

<style scoped>
.img {
    position: absolute;
    top: 80px;
    left: 10px;
}
.song-details {
  margin-left: 200px
}
</style>