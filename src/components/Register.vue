<template>
<v-layout  pt-2 align-center justify-center>
  <v-flex xs12 sm8 md4>
   <v-card>
    <panel title="Register">
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
                      <br>
        <div class="danger-alert" v-html="error" />
        <br>
                <v-btn
                  dark
                  class="teal"
                  @click="register">
                  Register
                </v-btn>
          </v-container>
     </panel>
    </v-card>
  </v-flex>
</v-layout>
</template>



<script>
import AuthService from "@/services/AuthService";
import Panel from '@/components/Panel'

export default {
  name: "register",
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
      console.log("email changed", value);
    }
  },
  methods: {
    async register() {



    try {
        const response = await AuthService.register({
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
        this.error = error.response.data.error || error.response.data;
        // console.log(error.response.data);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
