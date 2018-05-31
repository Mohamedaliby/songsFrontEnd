<template>
  <div id="app">
    <v-app>
      <page-header />
       <main>
         <!-- <v-container fluid> -->
           <router-view></router-view>
         <!-- </v-container> -->
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
  },
    sockets:{
      disconnect() {
      console.log('disconnected yo')
      this.$socket.close()
    },
    }
//   created: () => {
//     //  socket.io.uri = 'http://localhost:3000'
//     //  socket.open()
//     //  socket('http://localhost:3000')
//      console.log(socket)
//      socket.on('disconnect', ()=>{
//       console.log('disconnected yo')
//       //  socket.close()
//     });
//     // this.socket.on('hello',(data)=>{
//     //   console.log(data)
//     // })
// // var s = document.getElementById('socket')
// //   console.log(s)
//     // console.log(document.querySelector("script"));
//     //  var newS= document.querySelector('script')
//     //  newS.src = 'new.js'
//     // var s = document.createElement("script");
//     // s.src = "new.js";
//   }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 64px;
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
  /* padding-right: 0 !important;
  padding-left: 0 !important; */
}
}

  @media only screen and (max-width: 960px){
#app {
  margin-top: 48px;
}
}
</style>
