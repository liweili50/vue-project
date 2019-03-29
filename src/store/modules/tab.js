const state = {
  editableTabs: [{
    title: '首页',
    name: '1',
    path: '/'
  }],
  editableTabsValue: '',
  currentRoute: {}
}
const mutations = {
  ADD_TAB: (state, router) => {
    if (state.editableTabs.some(function (item) {
      return item.name === router.name
    })) {
      state.editableTabsValue = router.name
    } else {
      state.editableTabs.push(router);
      state.editableTabsValue = router.name
    }
  },
  REMOVE_TAB: (state, targetName) => {
    let tabs = state.editableTabs;
    let activeName = state.editableTabsValue;
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          let nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name;
          }
        }
      });
    }
    state.editableTabsValue = activeName;
    state.editableTabs = tabs.filter(tab => tab.name !== targetName);
  },
  SET_ACTIVEMENU: (state, index) => {
    state.activeMenu = index;
  }
}
const actions = {
  AddTab ({commit}, router) {
    commit('ADD_TAB', router);
  },
  RemoveTab ({commit, state}, targetName) {
    return new Promise(function (resolve, reject) {
      commit('REMOVE_TAB', targetName);
      resolve(state.editableTabsValue)
    })
  }
}
const tab = {
  state,
  mutations,
  actions
}
export default tab
