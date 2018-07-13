<template>
 <div class="app-wrap">
  <div class="app-left">
    <sidebar/>
  </div>
  <div class="app-right">
    <div class="app-right-header">
      <top/>
    </div>
    <tab/>
    <div class="app-right-view">
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
  },
  data() {
    return {
      isCollapse: false
    };
  }
};
</script>
<style scoped>
.app-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  background-color: #f8f8f8;
}

.app-left {
  height: 100%;
  background-color: #f8f8f8;
  float: left;
  z-index: 10;
}
.app-right {
  box-sizing: border-box;
  overflow: hidden;
}
.app-right-header {
  width: 100%;
  height: 80px;
  background-color: #4a90e2;
}
.app-right-view {
  width: 100%;
  background-color: #fff;
}
.app-right-view > div {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  min-height: 600px;
}
</style>


