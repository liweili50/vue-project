<template>
  <div>
    <h1>首页</h1>
    <!-- <div>{{$store.state.permission.routers}}</div> -->
  </div>
</template>
<script>
import { login } from '../../api/login'

export default {
  data () {
    return {};
  },
  methods: {
    add () {
      // this.$store.commit('jia')
      login().then(function (res) {
        console.log(res)
      })
    }
  },
  computed: {}
};
</script>