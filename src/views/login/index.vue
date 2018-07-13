<template>
 <div class="login-content">
   <h2>权限系统</h2>
  <div class="login-option-content">
    <h5>管理员登录</h5>
    <div class="username-input">
        <el-input
          placeholder="请输入用户名"
          v-model="username">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
    </div>
    <div class="password-input">
        <el-input
          placeholder="请输入密码"
          type="password"
          v-model="password">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
    </div>
    <div class="rember">
      <el-checkbox v-model="checked">记住密码</el-checkbox>
    </div>
    <div>
        <el-button @click="login" type="primary">登录</el-button>
    </div>
  </div>
 </div>
</template>
<script>
import { login } from "../../api/login";
export default {
  data() {
    return {
      username: "admin",
      password: "123456",
      checked: false
    };
  },
  created() {
    if (localStorage.getItem("user")) {
      let obj = JSON.parse(localStorage.getItem("user"));
      this.checked = true;
      this.username = obj.username;
      this.password = obj.password;
    }
  },
  methods: {
    login() {
      if (this.username === "") {
        this.$message({
          message: "用户名不能为空！",
          type: "warning"
        });
        return false;
      } else if (this.password === "") {
        this.$message({
          message: "密码不能为空！",
          type: "warning"
        });
        return false;
      }
      var data = {
        username: this.username,
        password: this.password
      };
      var _this = this;
      login(data).then(function(res) {
        console.log(res)
        if (res.data.code === 0) {
          if (_this.checked) {
            localStorage.setItem("user", JSON.stringify(data));
          } else {
            localStorage.removeItem("user");
          }
          localStorage.setItem("token", res.data.token);
          _this.$store.commit("SET_TOKEN", res.data.token);
          _this.$router.push({ path: "/" });
        } else {
          _this.$message({
            message: res.data.msg,
            type: "error"
          });
        }
      });
    }
  }
};
</script>
<style scoped>
.login-content {
  width: 380px;
  margin: 0 auto;
  height: 400px;
  position: absolute;
  left: 50%;
  margin-left: -190px;
  top: 50%;
  margin-top: -300px;
}
.login-content h2 {
  text-align: center;
}
.login-option-content {
  background-color: #fff;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: 320px;
}
.login-option-content h5 {
  text-align: center;
  font-size: 16px;
  padding-top: 20px;
}
.login-option-content > div {
  margin: 20px auto;
  width: 280px;
}
.login-option-content > div .el-button {
  width: 280px;
}

.login-option-content > div > span {
  display: inline-block;
  width: 80px;
  text-align: right;
}
.login-option-content div.rember {
  font-size: 14px;
  text-align: left;
}
</style>


