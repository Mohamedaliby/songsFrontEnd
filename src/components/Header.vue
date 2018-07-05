<template>
<div>
  <v-toolbar fixed class="teal--text">
    <v-toolbar-title class="mr-4 logo">
      <!-- <span class="logo"  @click="GoTo({name:'home'})"></span> -->
      <span @click="GoTo({name:'home'})">Title</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat
       to="/songs">Browse</v-btn>
     </v-toolbar-items>
     <v-toolbar-items>
      <v-btn flat v-if="$store.state.isLoggedin"
       to="/history">History</v-btn>
     </v-toolbar-items>
     <search-panel />
  <v-spacer></v-spacer>

   <v-toolbar-items>
      <v-btn v-if="!$store.state.isLoggedin"
       @click="GoTo({name:'login'})" flat>Login
      </v-btn>

      <v-btn v-if="!$store.state.isLoggedin"
       to="register" flat>Sign up
      </v-btn>

      <v-btn v-if="$store.state.isLoggedin"
       @click="logOut"
       flat>Log out
      </v-btn>
   </v-toolbar-items>
 </v-toolbar>
 </div>
</template>

<script>
import SearchPanel from "./songs/searchPanel";

export default {
  components: {
    SearchPanel
  },
  methods: {
    GoTo(route) {
      this.$router.push(route);
    },
    logOut() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({ name: "home" });
      this.$socket.close();
    }
  }
};
</script>

<style scoped>
.logo {
  cursor: pointer;
  background-image: url("https://static.kcell.kz/activ/img/music/music-left.png");
  background-size: 60px 60px;
  background-position: center;
  background-repeat: no-repeat;
  color: transparent;
  padding-top: 0;
  line-height: 3em;
}
.btn {
  color: #00695c;
}
</style>
