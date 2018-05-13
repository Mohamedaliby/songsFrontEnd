<template>
  <div id="app">
    <v-app>
      <page-header />
       <main>
         <v-container fluid>
           <router-view></router-view>
         </v-container>
       </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    PageHeader
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.input-group--text-field input {
  border-bottom: 1px solid #eee;
  }
  @media only screen and (max-width: 599px){
.chat {
 padding-right: 0 !important;
  padding-left: 0 !important;
}
.container{
  padding-right: 0 !important;
  padding-left: 0 !important;
}
}

</style>
