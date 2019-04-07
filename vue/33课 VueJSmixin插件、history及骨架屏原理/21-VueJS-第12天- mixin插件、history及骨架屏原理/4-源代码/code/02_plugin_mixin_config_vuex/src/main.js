import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 配置插件
import MyPlugin from './myPlugin.js';
Vue.use( MyPlugin(['about','home']) );

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
