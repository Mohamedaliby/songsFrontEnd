<template>
<v-layout align-center justify-center>
  <v-flex xs12 sm8 md6>
   <v-card>
     <div class="white elevation-2">
      <v-toolbar flat dense class="cyan">
        <v-toolbar-title class="white--text">Register</v-toolbar-title>
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
                      <br>
        <div class="danger-alert" v-html="error" />
        <br>
                <v-btn
                  dark
                  class="cyan"
                  @click="register">
                  Register
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
      console.log("email changed", value);
    }
  },
  methods: {
    async register() {
      const response = await AuthService.register({
        email: this.email,
        password: this.password
      })
        .then(response => {
          console.log(response.data);
          this.$store.dispatch("setToken", response.data.token);
          this.$store.dispatch("setUser", response.data.user);
        })
        .catch((err) => {
          let error = err.response.data.error || err.response.data;
          this.error = err.response.data.error || err.response.data;
          console.log(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
