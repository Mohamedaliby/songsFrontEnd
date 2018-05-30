<template>
<div>
  <v-toolbar fixed class="teal--text">
    <v-toolbar-title class="mr-4">
      <span class="logo" @click="GoTo({name:'home'})">Title</span> 
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat
       to="/songs">Browse</v-btn>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar-items>

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
export default {
  methods: {
    GoTo(route) {
      this.$router.push(route);
    },
    logOut() {
       this.$store.dispatch('setToken',null)
       this.$store.dispatch('setUser',null)
       this.$router.push({name:'home'})
       this.$socket.close()
    }
  }
};
</script>

<style scoped>
.logo {
  cursor: pointer;
}
.btn{
  color: #00695C;
}
</style>
