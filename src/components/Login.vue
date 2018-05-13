<template>
<v-layout align-center justify-center>
  <v-flex xs12 sm8 md6>
   <v-card>
     <div class="white elevation-2">
      <v-toolbar flat dense class="cyan">
        <v-toolbar-title class="white--text">Login</v-toolbar-title>
        </v-toolbar>
          <v-container fluid>
                <v-text-field
                   v-model="email"
                   type="email"
                   label="email"
                   :rules="[rules.required]"
                   ></v-text-field>
                <v-text-field
                   label="password"
                   v-model="password"
                   type="password">
                   <!-- :rules="[rules.required, rules.email]"> -->
                 </v-text-field>
                 <div class="error white--text" v-html="error"/>
                 <br>
                <v-btn
                  dark
                  class="cyan"
                  @click="login">
                  Login
                </v-btn>
          </v-container>
        </div>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      rules: {
        required: value => !!value || "Required.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  },
  watch: {
    email(value) {
      // console.log("email changed", value);
    }
  },
  methods: {
    async login() {
      try {
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        console.log(response);
        this.error = null;

        /*socket io attemp
       var s = document.getElementById('socket')
           s.src = '/socket.io/socket.io.js'
         io();*/

         
      } catch (error) {
        this.error = error.response.data;
        // console.log(error.response.data);
      }
    }
  },
  created: () => {
    this.socket= socket
    console.log(this.socket)
    // this.socket.on('hello',(data)=>{
    //   console.log(data)
    // })
// var s = document.getElementById('socket')
//   console.log(s)
    // console.log(document.querySelector("script"));
    //  var newS= document.querySelector('script')
    //  newS.src = 'new.js'
    // var s = document.createElement("script");
    // s.src = "new.js";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
