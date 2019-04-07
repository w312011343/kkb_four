// 做安装插件的行为
import Vue from 'vue';

console.log('正在安装mixin插件');
Vue.mixin({
    created() {
        console.log('通过插件的安装的行为')
    }
});
// 也可以使用Vue.use(Axios)