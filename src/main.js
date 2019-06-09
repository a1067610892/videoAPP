// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import fastClick from 'fastclick'
import '@/assets/css/reset.css'
import '@/assets/css/border.css'
import '@/assets/font/iconfont.css'
import 'lib-flexible'

Vue.prototype.axios = axios
Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
