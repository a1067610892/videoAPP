import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home/Home'
import My from '@/My/My'
import Lookup from '@/Lookup/Lookup'
import Login from '@/Login/Login'
import Details from '@/Details/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/My',
      name: 'My',
      component: My
    }, {
      path: '/Lookup',
      name: 'Lookup',
      component: Lookup
    }, {
      path: '/Login',
      name: 'Login',
      component: Login
    }, {
      path: '/Details',
      name: 'Details',
      component: Details
    }
  ]
})
