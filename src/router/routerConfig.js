const routers = [{
  path: '/',
  meta: { title: '首页' },
  component: (resolve) => require(['@/components/HelloWorld.vue'], resolve)
},
{
  path: '/error',
  meta: { title: '错误' },
  component: (resolve) => require(['@/views/errorPages/404.vue'], resolve)
}]
export default routers
