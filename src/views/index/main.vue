<template>
  <div>
    <h1>主要</h1>
    <p>{{$store.state.a.count}}</p>

    <button @click="add">+</button>
    <button @click="shut">-</button>
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
      this.$store.dispatch('increment')
    }
  },
  computed: {}
};
</script>