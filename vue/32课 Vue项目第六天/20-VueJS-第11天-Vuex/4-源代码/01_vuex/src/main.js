import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store, // 放入实例中
  render: h => h(App) // 针对vue运行时的方式，平时使用的是完整版
}).$mount('#app')
