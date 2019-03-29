const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  addRouters: state => state.permission.routers,
  userInfo: state => state.user.user,
  editableTabs: state => state.tab.editableTabs,
  editableTabsValue: state => state.tab.editableTabsValue
}
export default getters
