<template>
  <div class="tab">
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-click="handleClick" @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item, index) in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        :path="item.path"
      >
      </el-tab-pane>
    </el-tabs>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item,index) in currentRoute" :key="index" v-if="index===0">当前位置：{{item.meta.title}}</el-breadcrumb-item>
        <el-breadcrumb-item v-else>{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    editableTabs: function() {
      return this.$store.getters.editableTabs;
    },
    editableTabsValue: {
      get: function() {
        return this.$store.getters.editableTabsValue;
      },
      set: function(newValue) {
        this.$store.state.editableTabsValue = newValue;
      }
    },
    currentRoute: function() {
      return this.$store.getters.currentRoute.matched.filter(
        item => item.meta.title !== undefined
      );
    },
    allRouters: function() {
      return this.$store.getters.addRouters;
    }
  },
  methods: {
    removeTab(targetName) {
      let _this = this;
      this.$store.dispatch("RemoveTab", targetName).then(function(res) {
        let path = _this.editableTabs.find(function(item) {
          return item.name === res;
        }).path;
        _this.$router.push(path);
      });
    },
    handleClick(tab) {
      let path = tab.$attrs.path;
      this.$router.push(path);
    }
  }
};
</script>
<style>
.tab {
  height: 80px;
}
.el-tabs {
  background-color: #efefef;
}
.el-tabs--card > .el-tabs__header {
  border-bottom: 0px;
  margin: 0;
}
.el-tabs--card > .el-tabs__header .el-tabs__nav {
  border-top: none;
  border-left: none;
}
.el-tabs__item {
  font-size: 12px;
  color: #4a4a4a;
}
.el-tabs__item.is-active {
  background-color: #fff;
  color: #4a4a4a;
}
.el-breadcrumb {
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  color: #9b9b9b;
  padding-left: 20px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
#tab-1 .el-icon-close {
  display: none;
}
.el-tabs--card > .el-tabs__header #tab-1.is-closable:hover {
  padding: 0 20px;
}
</style>

