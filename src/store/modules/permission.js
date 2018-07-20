import { constantRouters } from '../../router/routers'

function hasPermission (roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}
function filterAsyncRouter (asyncRouterMap, roles) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouters,
    newRouters: []
  },
  mutations: {
    ADD_ROUTERS: (state, routers) => {
      state.routers = constantRouters.concat(routers, [{
        path: '*',
        redirect: '/error',
        hidden: true
      }])
    }
  },
  actions: {
    GenerateRoutes ({commit}, data) {
      return new Promise(resolve => {
        const { roles, menuList } = data
        let accessedRouters = [];
        if (roles.indexOf('admin') >= 0) {
          accessedRouters = menuList
        } else {
          accessedRouters = filterAsyncRouter(menuList, roles)
        }
        commit('ADD_ROUTERS', accessedRouters);
        resolve()
      })
    }
  }
}
export default permission
