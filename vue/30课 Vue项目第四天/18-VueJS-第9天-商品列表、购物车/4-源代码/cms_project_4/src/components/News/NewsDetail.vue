<template>
    <div>
        <nav-bar :title="myTitle" />
        <div class="news-title">
            <p>{{newsInfo.title}}</p>
            <div>
                <span>{{newsInfo.click}}次点击</span>
                <span>分类:民生经济</span>
                <span>添加时间:{{newsInfo.add_time | convertTime('YYYY-MM-DD')}}</span>
            </div>
        </div>
        <div class="news-content" v-html="newsInfo.content"></div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                newsInfo:{}, // 新闻详情数据
                myTitle:'', //可变的标题
            }
        },
        created() {
            // console.log(this.$route.params)
            // 1: 获取路由参数
            let { id } = this.$route.params;
            // 2: 拼接后台url发起请求
            let url = 'getnew/' + id;
            this.$axios.get(url)
            .then(res=>{
                 // 3: 响应的数据渲染到页面上，通过一个详情对象
                 this.newsInfo = res.data.message[0];
            })
            .catch(err=> console.log(err));
           
            
        },
        beforeRouteEnter (to, from, next) {
            let title = '详情';
            // 1: 判断from是新闻列表，还是商品详情
            if (from.name === 'NewsList') {
                title = '新闻详情';
            } else if (from.name === 'GoodsDetail') {
                title = '商品图文信息'
            }

            // 这里没有this，因为组件还没有被实例化
          next(vm => {
            // 通过 `vm` 访问组件实例 就是这里未来的this
                vm.myTitle = title;
          });
        }
    }
</script>
<style scoped>
.news-title p {
    color: #0a87f8;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 30px;
}

.news-title {
    margin-top: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}


/*主体文章的左右距离*/

.news-content {
    padding: 10 5;
}

</style>
