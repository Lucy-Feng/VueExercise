import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
// 导入刚才编写的组件
import AppIndex from '../components/home/AppIndex'
import Login from '../components/Login'

Vue.use(Router)

// 配置页面路由
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
