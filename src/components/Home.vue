<template>
<v-layout  id="home"  column>
    <v-container  fluid>
       <v-layout>    
        <v-flex sm12>
              <div class="white--text teal">
             <h1>Title</h1>
            </div>
         </v-flex>
       </v-layout>
         <v-layout>
       <v-flex sm4>
            <h2 class="card cyan accent-1">
              123
            </h2>
      </v-flex>
      <v-flex  sm4>      
              <h2 class="teal darken-2">
                12
              </h2>
        </v-flex>
        <v-flex  sm4>
              <h2 class="orange">
                555
              </h2>
        </v-flex>
  </v-layout>
  </v-container>
</v-layout>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  font-size: 5em;
}
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}

#home{
text-align: center;
height: 100vh;
background:#42b983;
}

</style>
