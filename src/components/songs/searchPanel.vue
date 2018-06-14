<template>
      <input class="search"
      v-model="search"
      type="text"
      name="search"
      placeholder="Search for music..">
</template>

<script>
import _ from 'lodash'
export default {
       name: 'searchPanel',
       data: () => ({
          search: ''
    }),
       watch:{
         search: _.debounce(async function (value) {
             const route = {
                 name: 'songs'
             }
             if (this.search !== '') {
                 route.query = {
                     search: this.search
                 }
             }
                 this.$router.push (route)
         }, 700),
         '$route.query.search': {
             immediate: true,
             handler (value) {
                 this.search = value
             }
         }
       }
}
</script>

<style scoped>
 /* input[type=text] {
    width: 180px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    background-image: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png');
    background-size: 30px 30px;
    background-position: 5px 5px; 
    background-repeat: no-repeat;
    padding: 10px 10px 10px 35px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}

input[type=text]:focus {
    width: 100%;
} */

 .search[type=text] {
    width: 180px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    /* background-image: url('../assets/searchicon.png'); */
    background-image: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-512.png');
    background-size: 30px 30px;
    background-position: 5px 5px; 
    background-repeat: no-repeat;
    padding: 10px 10px 10px 35px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
}

.search[type=text]:focus {
    width: 100%;
}
</style>
