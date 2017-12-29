import Vue from 'vue'
import Router from 'vue-router'
import Routers from './routers.js'
import Util from '../utils/index'
Vue.use(Router)

const RouterConfig = {
  mode: 'history',
  routes: Routers
}

const router = new Router(RouterConfig)
const whiteList = ['/login'];

router.beforeEach((to, from, next) => {
  Util.title(to.meta.title)
  if (localStorage.getItem('token')) {
    next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
    }
  }
})

router.afterEach((to, from, next) => {
  // window.scrollTo(0, 0)
})

export default router
