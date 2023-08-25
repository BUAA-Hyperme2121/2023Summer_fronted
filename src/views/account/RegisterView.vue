<template>
  <div class="register-page">
    <div class="container">
      <div class="typed-out">\ Join Us /</div>
    </div>
    <!-- 注册表单 -->
    <el-form
      :model="registerForm"
      :rules="rules"
      ref="registerFormEle"
      label-position="top"
      status-icon
      size="mini"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="registerForm.username"
          placeholder="3~10个字符"
        ></el-input>
      </el-form-item>
      <el-form-item label="真实姓名" prop="real_name">
        <el-input
          v-model="registerForm.read_name"
          placeholder="3~10个字符"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password_1">
        <el-input
          v-model="registerForm.password_1"
          placeholder="6~16位密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password_2">
        <el-input
          v-model="registerForm.password_2"
          placeholder="请再次输入密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input
          v-model="registerForm.email"
          placeholder="请输入邮箱"
        ></el-input>
      </el-form-item>
    </el-form>
    <!-- 注册按钮 -->
    <el-button
      type="primary"
      @click="register('registerForm')"
      class="register-btn"
      >注册</el-button
    >
    <!-- 跳转到登录页面 -->
    <div class="to-login">
      <router-link to="/login" class="login-link">已有账号？去登录</router-link>
    </div>
  </div>
</template>

<script setup>
import qs from "qs";
import { ref, reactive } from "vue";
// 注册表单
const registerForm = reactive({
  username: "",
  password_1: "",
  password_2: "",
  real_name: "",
  email: "",
});
const rules = reactive({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    {
      min: 3,
      max: 10,
      message: "长度在 3 到 10 个字符",
      trigger: "blur",
    },
  ],
  password_1: [
    { required: true, message: "请输入密码", trigger: "blur" },
    {
      min: 6,
      max: 16,
      message: "长度在 6 到 16 个字符",
      trigger: "blur",
    },
  ],
  password_2: [
    { required: true, message: "请再次输入密码", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (!this.isSamePassword()) {
          callback(new Error("两次输入密码不一致"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
  email: [
    { required: true, message: "请输入邮箱地址", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (!this.isEmail(value)) {
          callback(new Error("请输入正确的邮箱地址"));
        } else {
          callback();
        }
      },
      trigger: ["blur", "change"],
    },
  ],
});

const registerFormEle = ref();
const register = () => {
  // 处理注册逻辑
  registerFormEle.validate((validate) => {
    if (validate) {
      this.$axios({
        method: "post",
        url: "/user/register/",
        data: qs.stringify({
          username: this.registerForm.username,
          password_1: this.registerForm.password_1,
          password_2: this.registerForm.password_2,
          email: this.registerForm.email,
          sms_code: this.registerForm.sms_code,
        }),
      })
        .then((res) => {
          // 注册成功
          if (res.data.result == 1) {
            this.$message({
              message: res.data.message,
              type: "success",
            });
            // 跳转到登录页面
            this.$router.push("/login");
          } else {
            // 注册失败
            this.$message({
              message: res.data.message,
              type: "error",
            });
          }
        })
        .catch((err) => {
          // 服务器错误
          console.log(err);
          this.$message({
            message: "服务器开摆了~(￣▽￣)~*",
            type: "error",
          });
        });
    } else {
      // 表单验证失败
      this.$message({
        message: "请检查输入是否正确",
        type: "error",
      });
    }
  });
};
// 邮箱合法性验证
const isEmail = (email) => {
  let reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return reg.test(email);
};
//两次输入密码是否相同
const isSamePassword = () => {
  return this.registerForm.password_1 === this.registerForm.password_2;
};
</script>

<style scoped>
.register-page {
  background-color: #fff;
  padding: 50px;
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  width: 350px;
  margin: 20px auto;
}
.register-page h1 {
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.register-btn {
  margin: 0 auto;
  display: block;
}
.to-login {
  text-align: center;
  margin-top: 20px;
}
.login-link {
  font-size: 14px;
  color: #0366d6;
  text-decoration: none;
  transition: color 0.3s;
}
.login-link:hover {
  color: #044b9c;
}
.container {
  display: block;
  text-align: center;
  margin-left: 95px;
  margin-right: 95px;
}
.typed-out {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  overflow: hidden;
  /* border-right: 0.15em solid orange; */
  white-space: nowrap;
  font-size: 35px;
  width: 0;
  animation: typing 2s steps(20, end) forwards;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 50%;
  }
}
@keyframes blink {
  from {
    border-color: transparent;
  }
  to {
    border-color: black;
  }
}
</style>
