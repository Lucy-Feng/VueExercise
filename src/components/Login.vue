
<template>
  <div>
    用户名:<input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
    <br><br>
    密码： <input type="password" v-model="loginForm.password" placeholder="请输入密码"/>
    <br><br>
    <button v-on:click="login">登录</button>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
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
