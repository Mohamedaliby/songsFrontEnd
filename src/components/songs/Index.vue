<template>
   <v-layout pt-2 align-center justify-center>
    <v-flex xs12 sm8 md6>
     <songs-panel />
    </v-flex>
   </v-layout>
</template>

<script>
import SongsPanel from './SongsPanel'

export default {
       data () {
      return {

      }
    },
components: {
    SongsPanel
}
}
</script>

<style>

</style>
