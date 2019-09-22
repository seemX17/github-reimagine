import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedUser: null
  },
  mutations: {
    loadFileDetails(state, selectedUser) {
      state.selectedUser = selectedUser
    }
  },
  actions: {

  }
})