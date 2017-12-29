import Vue from 'vue'
import Router from 'vue-router'
import Routers from './routers.js'
import store from '../store/index'
import Util from '../utils/index'
Vue.use(Router)

const RouterConfig = {
  mode: 'history',
  routes: Routers
}

const router = new Router(RouterConfig)
const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
  Util.title(to.meta.title)  // 设置title
  if (localStorage.getItem('token')) {
    if (to.path === '/login') {
      next()
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetUserInfo').then(res => { // 拉取user_info
          console.log(res)
          // const roles = res.data.role
          // store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
          //   router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
          //   next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,replace: true so the navigation will not leave a history record
          // })
          next()
        })
      } else {
        console.log('信息已存在');
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
    }
  }
})

router.afterEach((to, from, next) => {
})

export default router
