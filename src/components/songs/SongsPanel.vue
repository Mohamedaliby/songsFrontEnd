<template>
  <!-- <v-layout pt-2 align-center justify-center>
    <v-flex xs12 sm8 md10>
        <panel title="songs">
             <v-btn to="songs/create" fab small absolute middle right slot="button" color="white teal--text darken-4"><v-icon>add</v-icon></v-btn>
             <v-container fluid>
                <v-layout row wrap>
                    <v-flex mx-auto
                            v-for="song in songs"
                            :key="song.id"
                            xs12 sm4 md3>
                        <div pt-2 class="card">
                            {{song.title}}
                            {{song.artist}}
                        </div>
                    </v-flex>
                </v-layout>
             </v-container>
        </panel>    
    </v-flex>
  </v-layout> -->

        <panel title="songs">
             <v-btn to="songs/create" fab small absolute middle right slot="button" color="white teal--text darken-4"><v-icon>add</v-icon></v-btn>
         <v-card>
      <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg
      >
        <v-layout column>
          <!-- <v-flex xs12 md4>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Unlimited music now</div>
                <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex> -->
          <v-flex v-for="song in songs"
                  :key="song.id"
                   xs12 md4>
            <v-card color="">
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
                  <v-flex xs3 sm6 md6>
                    <div>
                      <div class="headline">{{song.title}}</div>
                      <div class="grey--text darken-4">{{song.artist}}</div>
                    </div>
                  </v-flex>
                  <v-flex mt-5 xs1 md2>
                    <v-btn 
                      :to="{name:'song', params:{id:song.id}}"
                      small flat color="teal">
                      View
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
        </panel>     
</template>

<script>
//  :to="{path:`songs/${song.id}`, params:{song:song}}"
import SongService from '@/services/SongsService'
    export default {
     data () {
       return {
           songs:[]
       }
     },
     watch: {
       '$route.query.search': {
         immediate: true,
         async handler (value) {
           const response = await SongService.index(value)
           this.songs = response.data
           console.log (this.songs)
         }
       }
     },
    //  async mounted () {
    //      const response = await SongService.index()
    //      this.songs = response.data
    //      console.log (this.songs)
    //  }
    }
</script>

<style scoped>

</style>
