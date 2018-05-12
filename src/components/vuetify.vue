<template>
<v-layout align-center justify-center>
  <v-flex xs12 sm8 md6>
    <div class="white elevation-2">
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Register</v-toolbar-title>
      </v-toolbar>
       <v-text-field
                  v-model="password"
                  type="password"
                  name="password"
                  placeholder="password"
                  label="password"
                  counter
                  max="15"
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  label="E-mail"
                  v-model="email"
                  :rules="[rules.required, rules.email]"
                ></v-text-field>
      <input
 v-model="email"
 type="email"
 name="email"
 placeholder="email"/>
<br>
<input
 v-model="password"
 type="password"
 name="password"
 placeholder="password"/>
<br>
<div class="error" v-html="error"/>
<br>
<v-btn
class="cyan"
    @click="register">
 Register
</v-btn>
    </div>
  </v-flex>
</v-layout>
</template>



// toolbar مقسوم
<template>
  <v-card flat>
    <v-container fluid>
      <v-layout row child-flex wrap>
        <div>
          <v-toolbar>
            <v-btn icon class="hidden-xs-only">
              <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-toolbar-title>Title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon class="hidden-xs-only">
              <v-icon>search</v-icon>
            </v-btn>
          </v-toolbar>
        </div>
        <div style="flex-basis: 20%">
          <v-toolbar dark>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>reply</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-toolbar>
        </div>
      </v-layout>
    </v-container>
  </v-card>
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
        })
        .catch(err => {
          this.error = err.response.data.error;
          console.log(err.response.data.error);
        });
      // console.log(response.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
