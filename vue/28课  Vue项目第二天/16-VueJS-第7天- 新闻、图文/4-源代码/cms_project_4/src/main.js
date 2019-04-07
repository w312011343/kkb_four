// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// mint-ui开始
// 引入 全局样式
import '../static/css/global.css';
// 引入Mint-ui
import MintUI from 'mint-ui';
// 安装插件
Vue.use(MintUI);   // 里面其实做的就是注册所有的全局组件，和给Vue.prototype挂载一些对象，方便你使用   组件内的this.xxx就能用了
// 引入css
import 'mint-ui/lib/style.css'
// mint-ui 结束

// axios 开始
import Axios from 'axios';
// 引入 自己的插件安装器
import Installer from '@/plugins/installer';
Vue.use(Installer);
// 给Vue的原型挂载 $axios属性
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'https://www.sinya.online/api/';
// axios 结束

// 全局组件 开始
import MyUl from './components/common/MyUl';
import MyLi from './components/common/MyLi';
Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);
import NavBar from './components/common/NavBar';
Vue.component(NavBar.name,NavBar);
// 全局组件 结束



// 定义全局过滤器 开始
import Moment from 'moment';
Vue.filter('convertTime',function(data,formatStr){
    // 2015-04-16T03:50:28.000Z
    return Moment(data).format(formatStr);
});
// 定义全局过滤器 结束





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
