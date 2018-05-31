<template>
<v-layout pt-2 align-center justify-center>
  <v-flex xs12 sm8 md4>
   <v-card>
    <panel title="Login">
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
                   type="password"
                   :rules="[rules.required]">
                   <!-- :rules="[rules.required, rules.email]"> -->
                 </v-text-field>
                 <div class="error white--text" v-html="error"/>
                 <br>
                <v-btn
                  dark
                  class="teal"
                  @click="login">
                  Login
                </v-btn>
                <v-btn
                  dark
                  class="teal"
                  @click="hello">
                  hello
                </v-btn>
          </v-container>
        </panel>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import AuthService from "@/services/AuthService";
import {socket} from '../main'
import Panel from '@/components/Panel'


export default {
  name: "Login",
  components:{
    Panel
  },
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
  sockets:{
       login(user) {
      console.log(user)
    },
   newUserAdded(user) {
      console.log(user)
      this.$store.dispatch("NEW_USER", user);
    }
  },
  methods: {
    async login() {
      try {
        const response = await AuthService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        console.log(response);
        this.error = null;
        let user = response.data.user
        await AuthService.socketConnect(this.$socket, this.$store.state.token)
        this.$socket.emit('login', user)
        // console.log(socket)
      } catch (error) {
        this.error = error.response.data;
        // console.log(error.response.data);
      }
    },
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
//   },
    hello(){
       this.$socket.emit('hello', 'hello yo');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
