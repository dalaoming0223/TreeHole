import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import('../views/user/Login.vue')


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})