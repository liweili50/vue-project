<template>
 <div class="app-wrap">
  <sidebar/>
  <div class="app-right">
    <div class="app-right-header">
      <top/>
      <tab/>
    </div>
    <div class="app-router-view">
      <router-view/>
    </div>
  </div>
 </div>
</template>
<script>
import sidebar from "./sidebar.vue";
import top from "./header.vue";
import tab from "./tab.vue";
export default {
  components: {
    sidebar,
    top,
    tab
  }
};
</script>
<style scoped>
.app-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  background-color: hsl(0, 0%, 97%);
  display: table;
  table-layout: fixed;
}
.app-wrap .app-left,.app-wrap .app-right {
  display: table-cell;
  height: 100%;
  box-sizing: border-box;
  vertical-align: top;
  position: relative;
}
.app-right {
  width: 100%;
}
.app-right-header {
  width: 100%;
  height: 160px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
}
.app-router-view {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 180px 20px 20px;
  background-color: #fff;
}
.app-router-view > div {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>


