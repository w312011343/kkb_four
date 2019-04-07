<template>
    <div :style="{ height:wrapperHeight + 'px' }" ref="wrapper">
        <nav-bar title="商品展示"/>
        <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :auto-fill="autoFill" ref="loadmore" style="margin-bottom: 55px">
        <ul>
            <li v-for="goods in goodsList" :key="goods.id">
                <router-link :to="{ name:'GoodsDetail',query:{id:goods.id } }">
                    <img :src="goods.img_url">
                    <div class="title">{{goods.title | controllShow(23)}}</div>
                    <div class="desc">
                        <div class="sell">
                            <span>￥{{goods.sell_price}}</span>
                            <s>￥{{goods.market_price}}</s>
                        </div>
                        <div class="detail">
                            <div class="hot">
                                热卖中
                            </div>
                            <div class="count">
                                剩{{goods.stock_quantity}}件
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>
           
        </ul>
    </mt-loadmore>
    </div>
</template>
<script>
/**
 * 总结:  loadmore中的属性 
 *     1:buttomLoad 函数  
 *     2:禁止buttomLoad  bottom-all-loaded 默认为false ,true就禁止
 *     3: auto-fill 默认true，自动检测父容器，并调用buttomLoad直到撑满父容器
 *     4: pull 拉动未满足70px ,  drop 达到70px ,loading加载中
 *     5: loadmore组件对象的 onBottomLoaded() 通知结束loading进入Pull状态
 *     6: 在组件上写ref="xxx"   在js中通过this.$refs.xxx 获取组件对象
 *     6: 在普通元素上写ref="xxx"   在js中通过this.$refs.xxx 获取DOM对象
 *     7: 上拉加载更多公式
 *         进入检测机制 =>   可视高度 + 卷入高度 = 所有的数据高度
 */



    export default {
        data() {
            return {
                goodsList:[],// 商品数据
                allLoaded:false,// 为true禁止调用拉动函数
                autoFill:false, // 自动调用loadBottom直到撑满父容器
                page: this.$route.params.page,
                wrapperHeight:0 , // 父容器高度
            }
        },
        methods : {
            loadBottom() {
                this.loadGoodsByPage();
                // 通知状态改变
                this.$refs.loadmore.onBottomLoaded();
            },
            handleBottomChange(status) {
                console.log(status);
            },
            loadGoodsByPage() {
                 // 拼接URL 发起请求
                this.$axios.get(`getgoods?pageindex=${this.page}`)
                .then(res=>{
                    let { length } = res.data.message;
                    if (length < 10) {
                        this.$toast('没有更多数据了');
                        // 没有数据了
                        this.allLoaded = true;
                    }

                    if (this.page === 1) {
                        this.goodsList = res.data.message;
                    } else {
                        // 追加
                        this.goodsList = this.goodsList.concat(res.data.message);
                    }
                    
                    this.page ++;// 页码自增
                })
                .catch(console.log)
                }
        },
        created() {
            this.$axios.get('goods/getshopcarlist/88,89')
            .then(res=>{
                console.log(res)
            })
            .catch(console.log)
            // 获取页码
            // let { page } = this.$route.params;
            this.loadGoodsByPage();
        },
         mounted() {
            // 父容器高度（可视） = 设备高度 - 父容器的top
          this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
        }
    }

</script>
<style scoped>

ul {
    padding: 0;
    overflow: hidden;
}
li {
    width: 50%;
    float: left;
    padding: 6px;
    box-sizing: border-box;
}


li > a:not(.mui-btn) {
    margin: 0px;
    padding: 0px;
    border: 1px solid #5c5c5c;
    box-shadow: 0 0 4px #666;
    width: 100%;
    display: block;


}

li > a:not(.mui-btn) img {
     width: 100%;
}

.sell > span {
    float: left;
    color: red;
    text-align: left;
}

.detail >.hot {
    float: left;
    text-align: left;
    font-size: 15px;
}

.detail >.count {
    float: right;
    text-align: right;
    font-size: 15px;
}


/*撑开，去除浮动没有的高度*/

.detail {
    overflow: hidden;
}

.desc {
    color: rgba(92, 92, 92, 0.8);
    background-color: rgba(0, 0, 0, 0.2);
}

img {
    height: 200px;
}
</style>
