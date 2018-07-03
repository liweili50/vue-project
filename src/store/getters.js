const getters = {
  roles: state => state.user.roles,
  addRouters: state => state.permission.routers,
  token: state => state.user.token
}
export default getters
