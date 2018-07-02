import { getUserInfo } from '../../api/login'

const state = {
  token: localStorage.getItem('token'),
  user: {},
  roles: []
}
const mutations = {
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_USER: (state, user) => {
    state.user = user
  }
}
const actions = {
  // 获取用户信息
  GetUserInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo(state.token).then(res => {
      //只验证成功返回用户信息的情况，其他全部返回false
        if (res.status === 200) {
          commit('SET_ROLES', res.data.role)
          commit('SET_USER', res.data.user)
          resolve(res)
        }
      }).catch(error => {
        reject(error)
      })
    })
  }
}
const user = {
  state,
  mutations,
  actions
}
export default user
