<template>
  <div >
  <!-- 顶部标题栏 -->
    <mt-header title="信息管理系统"></mt-header>
    
    <!-- 所有即将变化的页面中都会被tmpl的样式生效, 相当于一个div包裹 -->
    <!-- out-in表示元素先离开，再进入（默认是同进同出） -->
    <transition  name="fade" mode="out-in">
      <router-view class="tmpl"/>
    </transition>
<!-- 底部tabbar -->
<mt-tabbar v-model="selected">

    <mt-tab-item id="Home"> 
        <div @click="change('Home')">
          <img slot="icon" src="../static/img/index.png">
           首页
        </div>
    </mt-tab-item>
 
  
    


    <mt-tab-item id="Member">
      <div @click="change('Member')">
        <img slot="icon" src="../static/img/vip.png">
        会员
      </div>
    </mt-tab-item>


  <mt-tab-item id="Shopcart">
    <div @click="change('Shopcart')" >
      <img slot="icon" src="../static/img/shopcart.png">
      购物车<mt-badge size="small" type="error">{{getNum}}</mt-badge>
    </div>
  </mt-tab-item>


  <mt-tab-item id="Search">
    <div @click="change('Search')">
      <img slot="icon" src="../static/img/find.png">
      查找
    </div>
  </mt-tab-item>

</mt-tabbar>
  </div>
</template>

<script>
  import MyBus from './MyBus';
  import { mapGetters } from 'vuex';
export default {
  computed:{
    ...mapGetters([
      'getNum'
    ])
  },
  name: 'App',
  created() {
    
  },
  methods:{
    change(val){
      // this.selected = val;
      this.$router.push({
        name:val
      });

    }
  },
  data () {
    return {
      selected: '',
    }
  },
  watch:{
    //  不能使用箭头函数，因为this会向上级绑定
    // selected:function(newV,oldV) {
    //   console.log(newV); // 页面的改变
    //   this.$router.push({
    //     name:newV
    //   });
    // }
  }
}
</script>

<style scoped>
/*淡入淡出*/
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.mint-tabbar {
  position: fixed;
  bottom: 0;
}

.mint-tab-item-label img {
  display: block;
    width: 25px;
    height: 25px;
    margin: 0 auto;
}
.mint-tab-item-label div {
  font-size:15px;
}
</style>
