import Vue from 'vue'
import App from './App.vue'

import Mint from 'mint-ui'
Vue.use(Mint)
import store from './store/index.js'
import router from './assets/js/router.js'
import axios from 'axios'
import 'babel-polyfill'
import fastclick from 'fastclick'
import md5 from 'md5'
Vue.prototype.$http=axios

import '../node_modules/mint-ui/lib/style.css'
import './assets/css/reset.css'
import './assets/css/iconfont.css'

import './assets/js/iconfont.js'


fastclick.attach(document.body)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
  loading:require("./assets/images/audio/3663.jpg")
})

import qs from 'qs'
Vue.prototype.$qs = qs;

new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
  store:store
})
