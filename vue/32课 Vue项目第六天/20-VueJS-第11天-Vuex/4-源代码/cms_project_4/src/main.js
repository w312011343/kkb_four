// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store';

Vue.config.productionTip = false

// mint-ui开始
// 引入 全局样式
// import '../static/css/global.css';
// // 引入Mint-ui
// import MintUI from 'mint-ui';
// // 安装插件
// Vue.use(MintUI);   // 里面其实做的就是注册所有的全局组件，和给Vue.prototype挂载一些对象，方便你使用   组件内的this.xxx就能用了



// 让插件来局部安装mint-ui的组件
import MyMintUIPlugin from './MyMintUIPlugin';
Vue.use(MyMintUIPlugin);


// 引入css
import '../static/css/global.css';
// mint-ui 结束

// axios 开始
import Axios from 'axios';
// 引入 自己的插件安装器
import Installer from '@/plugins/installer';
Vue.use(Installer);

import Indicator from 'mint-ui/lib/indicator';
import 'mint-ui/lib/indicator/style.css';

// 给Vue的原型挂载 $axios属性
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'http://www.sinya.online/api/';
// 定义拦截器
// 1: 请求发起前显示loading open();
Axios.interceptors.request.use(function(config) {
    // 不变配置:  可变，可以设置公共的请求头操作
    Indicator.open({
      text: '玩儿命加载中...',
      spinnerType: 'fading-circle'
    });
    // console.log(config);
    return config;  // config:{ headers}
})
// 2: 响应回来后关闭loading close()
Axios.interceptors.response.use(function(response) {
    //reponse: { config:{ },data:{} ,headers }

    // 接收响应头或者响应体中的数据，保存起来，供请求的拦截器中使用头信息操作
    Indicator.close();
    // console.log(response);
    return response;
})

// axios 结束

// vue-preview 开始
import VuePreview from 'vue-preview'
 
// defalut install
Vue.use(VuePreview);

// vue-preview 结束



// 全局组件 开始
import MyUl from './components/common/MyUl';
import MyLi from './components/common/MyLi';
Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);
import NavBar from './components/common/NavBar';
Vue.component(NavBar.name,NavBar);
import Comment from './components/common/Comment';
Vue.component(Comment.name,Comment);
import MySwipe from './components/common/Swipe';
Vue.component(MySwipe.name,MySwipe);
// 全局组件 结束



// 定义全局过滤器 开始
import Moment from 'moment';
Moment.locale('zh-cn');



Vue.filter('convertTime',function(data,formatStr){
    // 2015-04-16T03:50:28.000Z
    return Moment(data).format(formatStr);
});
// 相对时间过滤器
Vue.filter('relTime',function(time){
    // 2015-04-16T03:50:28.000Z
    return Moment(time).fromNow();
});
// 控制字数显示的过滤器
Vue.filter('controllShow',function(str,num) {
  // 佳能（Canon） EOS 700D 单反套机

    // 如果当前字符串小于num,返回原值
    if (str.length <= num ) {
      return str;
    }
    // 如果当前字符串大于num,截取0-num-1位
    if (str.length > num) {
      return str.substr(0,num-1) + '...';
    }

});
// 定义全局过滤器 结束





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
