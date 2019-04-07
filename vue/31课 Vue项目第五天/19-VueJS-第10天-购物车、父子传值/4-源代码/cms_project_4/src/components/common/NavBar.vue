<template>
        <mt-header :title="title">
          <div @click="goback" slot="left">
            <mt-button icon="back">返回</mt-button>
          </div>
          <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
</template>
<script>
    export default {
        name:'nav-bar',
        props:['title'], // props属性再template中可以直接用
        created() {
            // 再这里就使用this.title
        },
        methods:{
            goback(){
                this.$router.go(-1);
            }
        },
        data(){
            return {

            }
        }
    }
</script>
<style scoped>
.tmpl .mint-header {
    background-color: yellowgreen;
}    
</style>