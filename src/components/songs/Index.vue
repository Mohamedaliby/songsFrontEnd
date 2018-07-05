<template>
   <v-layout row wrap pt-2 justify-center>
         <v-spacer></v-spacer>
    <v-flex xs12 sm8 md6>
     <songs-panel />
    </v-flex>
    <v-flex pl-2 xs12 sm3 md3>
      <songs-bookmarks />
    </v-flex>
   </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsBookmarks from './SongsBookmarks'

export default {
       data () {
      return {

      }
    },
components: {
    SongsPanel,
    SongsBookmarks
}
}
</script>

<style>

</style>
