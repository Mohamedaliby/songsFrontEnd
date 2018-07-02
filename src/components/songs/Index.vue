<template>
   <v-layout pt-2 align-center justify-center>
         <v-spacer></v-spacer>
    <v-flex xs12 sm8 md6>
     <songs-panel />
    </v-flex>
    <v-flex md3>
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
