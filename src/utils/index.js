
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

export const formatRoutes = (aMenu) => {
  const aRouter = []
  aMenu.forEach(oMenu => {
    const {
      path,
      component,
      meta,
      children
    } = oMenu
    if (!validatenull(component)) {
      const oRouter = {
        path: path,
        component(resolve) {
          let componentPath = ''
          if (component === 'index') {
            require(['../views/index/index.vue'], resolve)
            return
          } else {
            componentPath = component
          }
          require([`../${componentPath}index.vue`], resolve)
        },
        meta: meta,
        children: validatenull(children) ? [] : formatRoutes(children)
      }
      aRouter.push(oRouter)
    }
  })
  return aRouter
}
