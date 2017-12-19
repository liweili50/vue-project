import Vue from 'vue'
import Router from 'vue-router'
import Routers from './routerConfig.js'
import Util from '../utils/index'
Vue.use(Router)

const RouterConfig = {
  mode: 'history',
  routes: Routers
}

const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  Util.title(to.meta.title)
  if (to.matched.length === 0) {
    router.push('error')
  }
  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

export default router
