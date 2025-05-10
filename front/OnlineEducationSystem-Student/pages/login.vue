<template>
  <div class="login-container">
    <div class="login-card">
      <div class="title-group">
        <a class="tab active" href="/login">登录</a>
        <span>·</span>
        <a class="tab" href="/register">注册</a>
      </div>
      
      <el-form ref="userForm" :model="user">
        <el-form-item 
          class="form-item" 
          prop="mobile"
          :rules="[
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { trigger: 'blur' }
          ]"
        >
          <div class="input-group">
            <el-input 
              type="text" 
              placeholder="手机号" 
              v-model="user.mobile"
              class="custom-input"
            />
            <i class="iconfont icon-phone input-icon"></i>
          </div>
        </el-form-item>

        <el-form-item 
          class="form-item" 
          prop="password"
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
        >
          <div class="input-group">
            <el-input 
              type="password" 
              placeholder="密码" 
              v-model="user.password"
              class="custom-input"
            />
            <i class="iconfont icon-password input-icon"></i>
          </div>
        </el-form-item>

        <div class="button-group">
          <input 
            type="button" 
            class="login-btn" 
            value="登录" 
            @click="submitLogin()"
          />
        </div>
        <div class="button-group">
          <input 
            type="button" 
            class="return-btn" 
            value="返回首页" 
            @click="returnHomePage()"
          />
        </div>
      </el-form>

      <div class="social-login">
        <p class="social-title">社交帐号登录</p>
        <div class="social-icons">
          <a 
            id="weixin" 
            class="social-icon" 
            target="_blank" 
            href="http://localhost:8160/api/ucenter/wx/userLogin"
          >
            <i class="iconfont icon-weixin"></i>
          </a>
          <a 
            id="qq" 
            class="social-icon" 
            target="_blank" 
            href="#"
          >
            <i class="iconfont icon-qq"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "~/assets/css/sign.css";
import "~/assets/css/iconfont.css";
import cookie from "js-cookie";
import loginAPI from "@/api/login";
import MD5 from "js-md5";

export default {
  layout: "sign",
  data() {
    return {
      user: {
        mobile: "",
        password: "",
      },
      loginInfo: {
        id: "",
        age: "",
        avatar: "",
        mobile: "",
        nickname: "",
        sex: "",
      },
    };
  },
  created() {},

  methods: {
    submitLogin() {
      this.user.password = MD5(this.user.password);

      loginAPI.submitLogin(this.user).then((response) => {
        cookie.set("oes_token", response.data, { domain: "localhost" });

        loginAPI.getUserInfo().then((response) => {
          this.loginInfo = response.data;
          cookie.set("oes_ucenter", JSON.stringify(this.loginInfo), { domain: "localhost" });

          if (cookie) {
            window.location.href = "/";
          }
        });
      });
    },
    returnHomePage() {
      window.location.href = "/";
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.login-card {
  background: white;
  padding: 40px 50px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  width: 420px;
}

.title-group {
  text-align: center;
  margin-bottom: 40px;
}

.tab {
  color: #666;
  font-size: 20px;
  margin: 0 15px;
  position: relative;
  cursor: pointer;
}

.tab.active {
  color: #2196f3;
}

.tab.active::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -8px;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: #2196f3;
}

.form-item {
  margin-bottom: 25px;
}

.input-group {
  position: relative;
}

.custom-input {
  width: 100%;
  height: 50px;
  padding-left: 50px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.custom-input:focus {
  border-color: #2196f3;
  outline: none;
}

.input-icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 20px;
}

.button-group {
  margin: 25px 0;
}

.login-btn,
.return-btn {
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.3s;
  display: flex; /* 关键居中代码 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.login-btn {
  background-color: #2196f3;
  color: white;
}

.login-btn:hover {
  background-color: #1976d2;
  transform: translateY(-2px);
}

.return-btn {
  background-color: #4caf50;
  color: white;
  margin-top: 15px;
}

.return-btn:hover {
  background-color: #43a047;
  transform: translateY(-2px);
}

.social-login {
  margin-top: 30px;
  text-align: center;
}

.social-title {
  color: #999;
  font-size: 16px;
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.social-icon {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
}

.social-icon .iconfont {
  font-size: 30px;
}

.social-icon:hover {
  transform: translateY(-3px);
}
</style>