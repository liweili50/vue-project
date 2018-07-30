
export const formatTitle = function (title) {
  title = title || 'vue project'
  window.document.title = title
}

export function validatenull(val) {
  if (val instanceof Array) {
    if (val.length === 0) return true;
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true;
  } else {
    if (val === 'null' || val == null || val === 'undefined' || val === undefined || val === '') return true;
    return false;
  }
  return false;
};

export const formatRoutes = (menuList) => {
  const asyncRouter = []
  menuList.forEach(menu => {
    const {
      path,
      component,
      meta,
      children
    } = menu
    if (!validatenull(component)) {
      const router = {
        path: path,
        component() {
          let componentPath = ''
          if (component === 'index') {
            return import('../views/index/index.vue')
          } else {
            componentPath = component
          }
          return import(`../${componentPath}index.vue`)
        },
        meta: meta,
        children: validatenull(children) ? [] : formatRoutes(children)
      }
      asyncRouter.push(router)
    }
  })
  return asyncRouter
}
