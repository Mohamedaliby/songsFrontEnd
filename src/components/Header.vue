<template>
  <v-toolbar dark fixed class="cyan">
    <v-toolbar-title class="mr-4">
      <span class="logo" @click="GoTo({name:'home'})">Title</span> 
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn dark flat>Browse</v-btn>
    </v-toolbar-items>

  <v-spacer></v-spacer>

   <v-toolbar-items>
      <v-btn v-if="!$store.state.isLoggedin"
       @click="GoTo({name:'login'})" dark flat>Login
      </v-btn>

      <v-btn v-if="!$store.state.isLoggedin"
       to="register" dark flat>Sign up
      </v-btn>

      <v-btn v-if="$store.state.isLoggedin"
       @click="logOut"
       dark flat>Log out
      </v-btn>
   </v-toolbar-items>
 </v-toolbar>
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
    }
  }
};
</script>

<style scoped>
.logo {
  cursor: pointer;
}
</style>
