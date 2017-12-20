<template>
 <div>
    <ul>
    <router-link to="/index">首页</router-link>
    <router-link to="/example1">例子1</router-link>
    <router-link to="/example2">例子2</router-link>
    
  </ul>
  <router-view/>
 </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>

