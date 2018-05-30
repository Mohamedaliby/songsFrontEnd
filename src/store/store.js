import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isLoggedin: false,
    isConnected: false,
    users: []
  },
  mutations: {
setToken (state, token) {
    state.token = token
    if (token) {
      state.isLoggedin = true
    } else {
      state.isLoggedin = false 
    }
},
setUser (state, user) {
  state.user = user
},
// Socket io 
SOCKET_CONNECT(state) {
  state.isConnected = true;
},

SOCKET_DISCONNECT(state) {
  state.isConnected = false;
},
 NEW_USER(state, user) {
  state.users.push(user)
}

  },
  actions: {
    setToken({commit}, token) {
      commit('setToken', token)
    },
    setUser({commit}, user) {
      commit('setUser', user)
    },
    NEW_USER({commit}, user) {
      commit('NEW_USER', user)
    },
    //  Socket io  not working
    /*socket_userAdded: (context, message) => {
      console.log('action socket')
      context.dispatch('NEW_USER', message);
      context.commit('NEW_USER', message);
    } */
}
})
