<template>
  <div >
  <!-- 顶部标题栏 -->
    <mt-header title="信息管理系统"></mt-header>
    
    <!-- 所有即将变化的页面中都会被tmpl的样式生效, 相当于一个div包裹 -->
    <router-view class="tmpl"/>

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
      购物车
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
export default {
  name: 'App',
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
      selected: 'Search'
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
