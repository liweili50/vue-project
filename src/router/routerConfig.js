const routers = [{
  path: '/',
  meta: { title: 'hh' },
  component: (resolve) => require(['@/components/HelloWorld.vue'], resolve)
}]
export default routers
