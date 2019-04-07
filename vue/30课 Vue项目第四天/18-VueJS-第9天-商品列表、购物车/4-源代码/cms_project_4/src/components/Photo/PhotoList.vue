<template>
    <div class="tmpl">
        
        <nav-bar title="图文分享"/>


        <!-- 引入返回导航 -->
        <div class="photo-header">
            <ul>
                <li v-for="category in categories" :key="category.id">
                    <a href="javascript:;" @click="navigateToCateById(category.id)">{{category.title}}</a>
                </li>
               
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="(img,index) in imgs" :key="index">
                    <router-link 
                    :to="{ name:'PhotoDetail',params:{id:img.id} }">
                        <img v-if="$route.query.categoryId === 0" v-lazy="img.img_url">
                        <img v-else :src="img.img_url">
                        
                        <p>
                            <span>{{img.title}}</span>
                            <br>
                            <span>{{img.zhaiyao}}</span>
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                imgs:[],// 图片数据
                categories:[],// 分类信息
            }
        },
        // 路由的参数改变
        beforeRouteUpdate (to, from, next) {
            // console.log(to);
            // console.log(from);
            let { categoryId } = to.query;

            // 加入是初次进入，就不需要这个代码
            if(categoryId === 0) {
                this.imgs = [];
            }


            // 发请求更改页面数据
            this.loadImgsById(categoryId);

            next();
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
          },
        methods:{
            navigateToCateById(id) {
                this.$router.push({
                    name:'PhotoList',
                    query:{ categoryId:id }
                });
            },
            loadImgsById(categoryId) {
             // 2: 发起请求
                this.$axios.get('getimages/' + categoryId)
                .then(res=>{
                    // 3: 渲染数据
                    this.imgs = res.data.message;
                })
                .catch(console.log)
            },
        },
        created() {
            // console.log(this.$route.query.categoryId)
            // 1: 获取分类id
            let { categoryId } = this.$route.query;
            this.loadImgsById(categoryId);

            // 获取分类信息
            this.$axios.get('getimgcategory')
            .then(res=>{
                this.categories = res.data.message;
                // 加入全部到数组的顶部
                this.categories.unshift({id:0,title:'全部'})
            })
            .catch(console.log);
            
        }
    }


</script>
<style scoped>
.photo-header li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}

.photo-header ul {
    /*强制不换行*/
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5;
}


/*下面的图片*/

.photo-list li {
    list-style: none;
    position: relative;
}

.photo-list li img {
    width: 100%;
    height: 230px;
    vertical-align: top;
}

.photo-list ul {
    padding-left: 0px;
    margin: 0;
}

.photo-list p {
    position: absolute;
    bottom: 0px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
}

.photo-list p span:nth-child(1) {
    font-weight: bold;
    font-size: 16px;
}


image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}

</style>
