import Vue from 'vue'

// 1: 引入 Vuex 对象
import Vuex from 'vuex';
import num from './num.js';
// 2: 安装插件
Vue.use(Vuex);
// 3:创建stroe对象
let store = new Vuex.Store({
    //  比如出现同名函数或变量的时候，为了保护其不被覆盖,
    //  在文档中还有个命名空间的概念
   modules:{
    // 不会影响使用, 都是大家的
        num:num
   }
});

export default store;