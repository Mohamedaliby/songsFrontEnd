<template>
  <v-container fluid>
    <v-layout pt-2 justify-center align-center>
        <v-flex xs12 sm6 md12>
            <panel title="Create a song">
                <v-container fluid>
                    <div class="error white--text text-xs-center" v-if="error">
                        {{error}}
                    </div>
                    <v-layout row wrap>
                        <v-flex xs12 md4>
                             <v-layout column wrap>
                                <v-flex
                                        xs12 md4>
                                        <v-text-field
                                           required
                                           :rules="[required]"
                                            pt-2
                                            v-model="song.title"
                                            label="Title">
                                        </v-text-field>
                                </v-flex>
                                <v-flex 
                                        xs12 md4>
                                        <v-text-field
                                            required
                                           :rules="[required]"
                                            pt-2
                                            v-model="song.artist"
                                            label="Artist">
                                        </v-text-field>
                                </v-flex>
                                <v-flex 
                                        xs12 md4>
                                        <v-text-field
                                           :rules="[required]"
                                            required
                                            pt-2
                                            v-model="song.album"
                                            label="Album">
                                        </v-text-field>
                                </v-flex>
                                <v-flex 
                                        xs12 md4>
                                        <v-text-field
                                         :rules="[required]"
                                            required
                                            pt-2
                                            v-model="song.genre"
                                            label="Genre">
                                        </v-text-field>
                                </v-flex>
                                <v-flex 
                                        xs12 md4>
                                        <v-btn light
                                               color="white"
                                               @click="$refs.image.click()">
                                               Select an album image
                                        </v-btn>
                                        <input style="display:none;"
                                               type="file"
                                               name="file"
                                               ref="image"
                                               @change="onFileSelected">
                                </v-flex>
                                <v-flex 
                                        xs12 md4>
                                        <v-text-field
                                           :rules="[required]"
                                            required
                                            pt-2
                                            v-model="song.youtubeId"
                                            label="Youtube Id">
                                        </v-text-field>
                                </v-flex>
                        </v-layout>
                        </v-flex>
                        <v-flex pl-3 xs12 md8>
                            <v-layout row wrap align-center justify-center>
                                <v-flex
                                        xs10>
                                        <v-text-field
                                           :rules="[required]" 
                                            required
                                            pt-2
                                            v-model="song.lyrics"
                                            multi-line
                                            label="Lyrics">
                                        </v-text-field>
                                </v-flex>
                                <v-flex 
                                        xs10>
                                        <v-text-field
                                           :rules="[required]"
                                            required
                                            pt-2
                                            v-model="song.tab"
                                            multi-line
                                            label="Tab">
                                        </v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-container>
                <div class="text-xs-center">
                <v-btn @click="create" color="teal darken-3 white--text">Create song</v-btn>
                </div>
            </panel>    
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongsService'
    export default {
        components: {
            Panel
        },
        data () {
            return {
                error:null,
                song: {
                    title: null,
                    artist: null,
                    genre: null,
                    album: null,
                    albumImage: null,
                    youtubeId: null,
                    lyrics: null,
                    tab: null
                },
                required: (value) => !!value || 'Required.'
           }
        },
        methods:{
            async create () {
                 this.error = null
                 const areAllFieldsFilledIn = Object
                .keys(this.song)
                .every(key => !!this.song[key])
                 if (!areAllFieldsFilledIn) {
                    this.error = 'Please fill in all the required fields.'
                    return
                }
                try {
                    const ong = new FormData()
                    ong.append('file', this.song.albumImage)
                    ong.append('song', this.song)
                    // Song.values('s',this.song)
                    console.log(ong)
                    console.log(this.song)
                    await SongService.post(ong)
                    this.$router.push({name: 'songs'})
                } catch (error) {
                    console.log(error)
                }
            
            },
            onFileSelected (event) {
                console.log(event)
                this.song.albumImage = event.target.files[0]
            }
        }

    }
</script>

<style scoped>

</style>
