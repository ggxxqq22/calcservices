import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router/index.js'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
axios.defaults.baseURL = 'http://120.27.210.217:8025'
// axios.defaults.baseURL = 'http://127.0.0.1:8025'
Vue.prototype.$http = axios
new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
