import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isLoggedin: false
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
}
  },
  actions: {
    setToken({commit}, token) {
      commit('setToken', token)
    },
    setUser({commit}, user) {
      commit('setUser', user)
    }
  }
})
