// 引入必须要顶级进行
import Header from 'mint-ui/lib/header';//默认也会查找index.js
import 'mint-ui/lib/header/style.css';
import Switch from 'mint-ui/lib/switch';
import 'mint-ui/lib/switch/style.css';
import Swipe from 'mint-ui/lib/swipe';
import 'mint-ui/lib/swipe/style.css';
import SwipeItem from 'mint-ui/lib/swipe-item';
import 'mint-ui/lib/swipe-item/style.css';
import Lazyload from 'mint-ui/lib/lazyload';
import 'mint-ui/lib/lazyload/style.css';
import Loadmore from 'mint-ui/lib/loadmore';
import 'mint-ui/lib/loadmore/style.css';
import Button from 'mint-ui/lib/button';
import 'mint-ui/lib/button/style.css';
import Toast from 'mint-ui/lib/toast';
import 'mint-ui/lib/toast/style.css';
import Tabbar from 'mint-ui/lib/tabbar';
import 'mint-ui/lib/tabbar/style.css';
import TabItem from 'mint-ui/lib/tab-item';
import 'mint-ui/lib/tab-item/style.css';
import Badge from 'mint-ui/lib/badge';
import 'mint-ui/lib/badge/style.css';
// 必须具备install函数
function MyInstaller (options) {
    //  options操作。保存选项
}

// 必须具备Install函数
MyInstaller.install = function(Vue){
    Vue.component(Badge.name,Badge);
    Vue.component(Tabbar.name,Tabbar);
    Vue.component(TabItem.name,TabItem);
    Vue.component(Header.name, Header);
    Vue.component(Switch.name, Switch);
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);
    Vue.component(Loadmore.name, Loadmore);
    Vue.component(Button.name, Button);
//  v-lazy指令  v-lazy="xxxx"  使用use函数让其内部实现指令的注册
    Vue.use(Lazyload); //  注册了一个叫lazy的指令共我们使用

//js组件一般是使用该对象提供的方法，有对象即可
//挂载到Vue的原型上，供所有组件实例对象使用(this)
    Vue.prototype.$toast = Toast;   // 组件this.$toast
}

export default MyInstaller;