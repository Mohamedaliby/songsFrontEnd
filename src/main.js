// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
import {sync} from 'vuex-router-sync'
import store from './store/store'
import io from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
import Panel from '@/components/global/Panel'

Vue.config.productionTip = false;
Vue.component('panel', Panel)

Vue.use(Vuetify)
sync(store, router)
/* eslint-disable no-new */

let token = store.getters.token;
export const socket = io('http://localhost:3000',{
  autoConnect: false,
  query: {
    token: token
  }
})

Vue.use(VueSocketIO, socket, store)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
