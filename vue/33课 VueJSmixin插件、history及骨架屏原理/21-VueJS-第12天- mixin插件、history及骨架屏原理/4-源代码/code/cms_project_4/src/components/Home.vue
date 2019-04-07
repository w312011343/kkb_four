<template>
  <div>
  <!-- 上有轮播图 -->
  <my-swipe url="getlunbo" />
  <!-- 下有九宫格 -->
   <div class="grid">
        <my-ul>
             <my-li v-for="(module,index) in modules" :key="index">
                <router-link :to="module.route">
                  <span :class="module.className"></span>
                  <div>{{module.title}}</div>
                </router-link>
            </my-li>
        </my-ul>
    </div>



  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
       modules:[{
        title:'新闻资讯',className:'back-news',route:{name:'NewsList'}
       },{
        title:'图文分享',className:'back-pic',route:{name:'PhotoList',query:{categoryId:0} }
       },{
        title:'商品展示',className:'back-goods',route:{name:'GoodsShow',params:{page:1} }
       },{
        title:'留言反馈',className:'back-feed',route:{name:'Home'}
       },{
        title:'搜索咨询',className:'back-search',route:{name:'Home'}
       },{
        title:'联系我们',className:'back-callme',route:{name:'Home'}
       }]
    }
  },
  created () {
    // 测试自己写的插件
    this.$log = 'abc';
    this.$log();
    this.$log();
    this.$log();

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.grid span {
    display: inline-block;
    margin: 10px 0;
    width: 50px;
    height: 50px;
    background-repeat: round;
}

.back-pic {
    background-image: url(../../static/img/picShare.png);
}
.back-goods {
    background-image: url(../../static/img/goodsShow.png);
}
.back-feed {
    background-image: url(../../static/img/feedback.png);
}
.back-search {
    background-image: url(../../static/img/search.png);
}
.back-callme {
    background-image: url(../../static/img/callme.png);
}
.back-news {
    background-image: url(../../static/img/news.png);
}

 
</style>
