
<template>
  <body id="poster">
  <el-form class="login-container" label-position="left"
           label-width="0px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.username"
                auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password"
                auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: royalblue;border: none" v-on:click="login">登录</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        // 默认值
        username: '',
        password: ''
      },
      responseResult: []
    }
  },
  methods: {
    login () {
      this.$axios
        .post('/login', {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.$router.replace({path: '/index'})
          }
        })
        .catch(failResponse => {
        })
    }
  }
}
</script>
<style>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  #poster {
    background:url("../assets/book.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }
</style>

<!--&lt;!&ndash;登录页面 Login.vue&ndash;&gt;-->
<!--<template>-->
<!--  <div>-->
<!--    用户名:<input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>-->
<!--    <br><br>-->
<!--    密码： <input type="password" v-model="loginForm.password" placeholder="请输入密码"/>-->
<!--    <br><br>-->
<!--    &lt;!&ndash; 绑定登录方法&ndash;&gt;-->
<!--    <button v-on:click="login">登录</button>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'Login',-->
<!--  data () {-->
<!--    return {-->
<!--      loginForm: {-->
<!--        username: '',-->
<!--        password: ''-->
<!--      },-->
<!--      responseResult: []-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    // 登录按钮的点击方法，向后端 /login 接口发送数据，获得成功的响应后，页面跳转到 /index-->
<!--    login () {-->
<!--      let postData = this.$qs.stringify({-->
<!--        username: this.loginForm.username,-->
<!--        password: this.loginForm.password-->
<!--      })-->
<!--      this.$axios({-->
<!--        method: 'post',-->
<!--        url: '/login',-->
<!--        data: postData})-->
<!--        // .post('/login', data)-->
<!--        .then(successResponse => {-->
<!--          if (successResponse.data.code === 200) {-->
<!--            this.$router.replace({path: '/index'})-->
<!--          }-->
<!--        })-->
<!--        .catch(failResponse => {})-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
