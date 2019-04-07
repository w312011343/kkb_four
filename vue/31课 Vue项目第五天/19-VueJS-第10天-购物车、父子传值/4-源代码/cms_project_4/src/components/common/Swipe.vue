<template>
     <mt-swipe :auto="4000">
      <!-- v-for组件的时候需要给key,避免vue计算key，来提升性能 -->
      <!-- key就是位置的标识 -->
        <mt-swipe-item v-for="(item,index) in imgs||myimgs" :key="index" >
            <img :src="item.img||item.src" alt="">
        </mt-swipe-item>
      </mt-swipe>
</template>
<script>
    export default {
        name:'my-swipe',
        props:['url','imgs'],
        data(){
            return {
                myimgs:[]
                // myimgs:this.imgs
                // myimgs的修改不会影响外部的this.imgs的重新渲染
                // 子接收父的属性再去做显示，也不能显示成功，内部执行时机问题
                // 总结: 暂且不把不子属性混为一谈，可能造成不显示或更新失败的问题
            }
        },
        created() {
            // 父传递给子的组件，子在接收成为自己的属性后，发生改变的话，不会触发视图更新

            console.log('====',this.imgs);
            // 兼容传对象的方式
                if(this.url) {
                    this.$axios.get(this.url)
                    .then(res=>{
                      this.myimgs = res.data.message;
                    })
                    .catch(err=>console.log(err));
                }
        }
    }
</script>
<style scoped>
.mint-swipe {
    width: 100%;
    height:200px;
}
.mint-swipe img {
  width: 100%;
}
 
</style>