import Vue from 'vue'
import App from './App.vue'

// 使用的时候是v-demo 注册的时候是demo
Vue.directive('demo', {
    // 指令被编译好，即将运行功能的时候触发
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      // 计算表达式后的结果（vue运行环境内）
      'value: '      + s(binding.value) + '<br>' +
      // 原本的表达式
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  }
});





new Vue({
  el: '#app',
  render: h => h(App)
})
