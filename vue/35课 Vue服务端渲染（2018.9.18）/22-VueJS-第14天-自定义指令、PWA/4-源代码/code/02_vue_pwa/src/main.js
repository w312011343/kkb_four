import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'; // 触发注册sw

import Axios from 'axios';

Vue.prototype.$axios = Axios;


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
