import { getUserInfo } from '../../api/login'

const state = {
  token: '',
  user: {},
  roles: []
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
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
      getUserInfo({token: localStorage.getItem('token')}).then(res => {
      //只验证成功返回用户信息的情况，其他全部reject
        if (res.data.code === 0) {
          // 拉取用户信息成功，验证token未失效，更新store里的token以及用户信息
          commit('SET_TOKEN', localStorage.getItem('token'))
          commit('SET_ROLES', res.data.rolesList)
          commit('SET_USER', res.data.user)
          resolve(res)
        } else {
          reject(res)
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
