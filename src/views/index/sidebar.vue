<template>
    <div>
      <el-menu class="el-menu-vertical-demo" :default-active="activeMenu" :collapse="isCollapse">
        <div class="menu-logo">
           <div class="menu-logo-content">
             <img v-show="!isCollapse" src="../../assets/images/logo.png" alt="logo">
             <span v-show="!isCollapse">管理系统</span>
             <i class="el-icon-tickets" @click="menuCollaps"></i>
           </div>
        </div>
        <el-submenu v-for="(item,index) in sideBarList" v-if="!item.hidden===true" :key="index" :index="index+''">
            <template slot="title" v-if="item.children" >
            <i v-show="isCollapse" class="el-icon-location"></i>
            <span slot="title">{{item.meta.title}}</span>
            </template>
            <el-menu-item style="padding-left: 20px" v-for="(menu,i) in item.children" :index="index+'-'+i"  :key="i" @click="routerTo(item.path,menu.path)">{{menu.meta.title}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    sideBarList: function() {
      return this.$store.getters.addRouters;
    },
    activeMenu: function () {
      return this.$store.getters.activeMenu
    }
  },
  methods: {
    menuCollaps() {
      this.isCollapse = !this.isCollapse;
    },
    routerTo(path, childPath) {
      this.$router.push(path + "/" + childPath);
    }
  }
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
}
.el-menu {
  border-right: 0px;
  background-color: #f8f8f8;
}
.menu-logo {
  height: 80px;
  background-color: #3587e7;
  position: relative;
}
.menu-logo-content {
  width: 100%;
  height: 32px;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -16px;
  box-sizing: border-box;
  padding: 0 20px;
}
.menu-logo-content img {
  width: 32px;
  vertical-align: -10px;
  margin-right: 10px;
}
.menu-logo-content span {
  line-height: 28px;
  font-size: 20px;
  color: #fff;
}
.menu-logo-content i {
  position: absolute;
  right: 20px;
  top: 6px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
}
.el-submenu {
  box-sizing: border-box;
}
.el-menu--inline {
  margin: 0 5px;
}
.is-opened .el-menu--inline {
  box-sizing: border-box;
  border-top: 1px solid #e1e1e1;
}
.el-submenu__title span {
  padding-left: 15px;
}
.is-opened .el-submenu__title {
  color: #3587e7;
}
.el-menu--inline li {
  box-sizing: border-box;
  border-radius: 5px;
  margin: 5px 10px 5px 5px;
}
.el-submenu .el-menu-item {
  height: 40px;
  line-height: 40px;
}
.el-menu--inline .is-active {
  background-color: #4a90e2;
  color: #fff;
}
</style>
