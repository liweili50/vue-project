import Vue from 'vue'
import Router from 'vue-router'
import Routers from './routerConfig.js'

Vue.use(Router)

const RouterConfig = {
  mode: 'history',
  routes: Routers
}

const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start();
  // Util.title(to.meta.title);
  window.document.title = to.meta.title
  if (to.matched.length === 0) {
    router.push('error')
  }
  next()
})

router.afterEach((to, from, next) => {
  // iView.LoadingBar.finish();
  // this.fullscreenLoading = false;
  // setTimeout(function () {
  //   loadingInstance.close();
  // },1000)
  window.scrollTo(0, 0)
})

export default router
