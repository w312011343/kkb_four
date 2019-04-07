import Vue from 'vue'
import App from './App.vue'
import Son from './Son.vue';

Vue.component(Son.name,Son);
import myMixin from './my_mixin.js';
// 所有的Vue的实例继承
Vue.mixin(myMixin);

// 插件: Vue.use(具备install函数)

new Vue({
  el: '#app',
  render: function (h) {
    return h(App); // 根据组件创建DOM(vnode)
  }
})
