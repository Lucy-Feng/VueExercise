import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
// 导入刚才编写的组件
import AppIndex from '../components/home/AppIndex'
import Login from '../components/Login'

Vue.use(Router)

// 配置页面路由
export default new Router({
  // 把 Vue 中配置的路由从默认的 hash 模式切换为 histroy 模式
  // 访问不加 # 号的 http://localhost:8080/login ，成功加载页面。
  mode: 'history',
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
