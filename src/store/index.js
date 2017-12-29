import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  token: '',
  user: {},
  roles: []
}
const getters = {
  double: state => state.count * 2
}
const mutations = {
  jia (state) {
    state.count++
  },
  jian (state) {
    state.count--
  }
}
const actions = {
  increment ({commit}) {
    commit('jian')
  }
}
const moduleA = {
  state,
  getters,
  mutations,
  actions
}
export default new Vuex.Store({
  modules: {
    a: moduleA
  }
})
