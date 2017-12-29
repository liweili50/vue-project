<template>
 <div class="login">
 <div class="demo-input-suffix">
  用户名：
  <el-input
    placeholder="请输入内容"
    v-model="input1">
  </el-input>
</div>
<div class="demo-input-suffix">
  密码：
  <el-input
    placeholder="请输入内容"
    v-model="input2">
  </el-input>
   <el-button @click="login1">登陆</el-button>
</div>
 </div>
</template>
<script>
import { login } from '../../api/login'
export default {
  data () {
    return {
      input1: 'Jonas',
      input2: '123456'
    };
  },
  methods: {
    login1 () {
      var data = {
        user: this.input1,
        psd: this.input2
      }
      var _this = this
      login(data).then(function (res) {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        _this.$router.push({ path: '/' });
      })
    }
  }
};
</script>
<style scoped>
.login{
  width: 500px;
  margin: 0 auto;
}
</style>


