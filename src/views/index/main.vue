<template>
  <div>
    <h1>首页</h1>
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
    },
    shut () {
      // this.$store.dispatch('increment')
    }
  },
  computed: {}
};
</script>