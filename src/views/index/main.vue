<template>
  <div>
    <h1>主要</h1>
    <p>{{$store.state.a.count}}</p>

    <button @click="add">+</button>
    <button @click="shut">-</button>
  </div>
</template>
<script>
export default {
  data () {
    return {};
  },
  methods: {
    add () {
      this.$store.commit('jia')
    },
    shut () {
      this.$store.dispatch('increment')
    }
  },
  computed: {}
};
</script>