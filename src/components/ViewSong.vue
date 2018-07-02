<template>
  <v-layout pt-2 row wrap>
    <v-flex xs12 sm6 pl-2 pr-2 pt-1>
      <v-card>
        <v-card-media
          height="200px"
          color="grey lighten-4"
          :class="backgroundColor"
        >
        <v-spacer></v-spacer>
          <div class="text-xs-center">
            <v-menu  class="mr-2" open-on-click bottom offset-y>
              <v-btn slot="activator" flat>Edit</v-btn>
              <v-list>
                <v-list-tile :to="{name:'edit-song', params:{id:song.id}}">
                  <v-list-tile-title>Edit</v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="deleteSong">
                  <v-list-tile-title>delete</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
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
          
          <v-btn flat @click.native="show = !show">
            <span>Lyrics</span><v-icon pl-1>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
              <v-card-text v-show="show">
                <v-flex pl-4 pr-4 >
                  <div class="headline teal--text">Lyrics
                  </div>
                    <br>
                    <p class="lyrics">{{song.lyrics}}</p>
                </v-flex>
             </v-card-text>
        </v-slide-y-transition>
      </v-card>
   </v-flex>
   <v-flex xs12 sm6 pl-2 pr-2 pt-1>
      <v-card>
        <v-card-title primary-title>
            <div class="headline teal--text">Tab</div>
        </v-card-title>
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
      song: {},
      mediaColors: ['grey','teal','orange',
                    'deep-orange darken-3',
                    'deep-orange darken-4',
                    'deep-orange darken-2',
                    'blue-grey lighten-3',
                    'grey lighten-1',
                    'teal lighten-3']
    }),
    methods: {
       async deleteSong () {
         try {
              const id = this.$route.params.id
              await SongService.delete(id)
               console.log('song deleted')
              this.$router.push({name: 'songs'})
         } catch (error) {
              console.log(error)
         }

       }
    },
    computed: {
     backgroundColor() {
     const i = Math.floor(Math.random() * 8 + 1)
     return this.mediaColors[i]
     }
    },
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

.lyrics {
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: 1.58;
  letter-spacing: -.003em;
  max-width: 60%;
}
</style>