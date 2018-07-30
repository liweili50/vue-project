<template>
    <div class="header">
        <div class="header-content">
            <div class="userInfo" @click="isShow=!isShow">
                <img class="userInfo" src="../../assets/images/user.jpeg" alt="">
                <span class="userInfo">{{user.name}}</span>
                <i  class="el-icon-caret-bottom userInfo"></i>
            </div>
            <ul class="header-content-list" v-if="isShow">
                <li class="triangle"></li>
                <li class="border-line" @click="changePassWord">修改密码</li>
                <li @click="logout">退出登录</li>
            </ul>
        </div>
     <el-dialog
      title="修改密码"
      :visible.sync="dialogVisible"
      center
      width="30%">
      <div class="password-content">
        <label for="">
          <span>原密码</span><el-input v-model="password.oldPassWord" type="password"></el-input>
        </label>
        <label for="">
          <span>新密码</span><el-input v-model="password.newPassWord" type="password"></el-input>
        </label>
        <label for="">
          <span>再次输入</span><el-input v-model="password.newPassWordAagin" type="password"></el-input>
        </label>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmPassWord">确 定</el-button>
      </span>
    </el-dialog>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      dialogVisible: false,
      password: {
        oldPassWord: "",
        newPassWord: "",
        newPassWordAagin: ""
      }
    };
  },
  created() {
    let _this = this;
    document.getElementById("app").addEventListener("click", function(e) {
      if (!e.target.className.split(' ').includes('userInfo')) {
        _this.isShow = false;
      }
    });
  },
  computed: {
    user: function () {
      return this.$store.getters.userInfo
    }
  },
  methods: {
    changePassWord() {
      this.isShow = false;
      this.dialogVisible = true;
    },
    logout() {
      this.isShow = false;
      localStorage.removeItem("token");
      this.$router.push("login");
      location.reload();
    },
    confirmPassWord() {
      if (this.password.oldPassWord === "") {
        this.$notify({
          title: "警告",
          message: "原密码不能为空！",
          type: "warning"
        });
        return false;
      } else if (this.password.newPassWord === "") {
        this.$notify({
          title: "警告",
          message: "新密码不能为空！",
          type: "warning"
        });
        return false;
      } else if (this.password.newPassWord !== this.password.newPassWordAagin) {
        this.$notify({
          title: "警告",
          message: "两次密码不相同！",
          type: "warning"
        });
        return false;
      }
    }
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 80px;
  position: relative;
  box-sizing: border-box;
  padding: 18px 0px;
  background-color: #4a90e2;
}
.header-content {
  height: 44px;
  box-sizing: border-box;
  background-color: #337dd3;
  border-radius: 50px;
  float: right;
  margin-right: 38px;
  padding: 8px 10px;
  text-align: center;
  position: relative;
}
.header-content > div {
  cursor: pointer;
  position: relative;
  z-index: 10;
}
.header-content img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  vertical-align: -8px;
}
.header-content span {
  color: #fff;
}
.header-content i {
  color: rgb(144, 177, 224);
}
.header-content-list {
  width: 100%;
  height: 100px;
  background-color: #fff;
  box-sizing: border-box;
  position: absolute;
  top: 36px;
  left: 0px;
  border: 1px solid #e4e7ed;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  z-index: 10;
  padding: 10px 0;
}
.header-content-list li.triangle {
  width: 0;
  height: 0;
  border-bottom: 8px solid #fff;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  position: absolute;
  top: -8px;
  left: 50%;
  margin-left: -3px;
}
.header-content-list li {
  font-size: 14px;
  color: #5a5e66;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  margin: 0px 20px;
  cursor: pointer;
}
.header-content-list li.border-line {
  border-bottom: 1px solid #e4e7ed;
}
.password-content > label {
  display: block;
  text-align: center;
  margin: 15px 0;
}
.password-content > label > span {
  display: inline-block;
  width: 80px;
}
.password-content .el-input {
  width: 240px;
}
</style>
