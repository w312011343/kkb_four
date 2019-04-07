<template>
    <div>
    <my-second-header :title="title"></my-second-header>
        <CommentVue :aid="aid"></CommentVue>
    </div>
</template>
<script>
import CommentVue from '../commons/comment.vue';
    export default {
        data(){
            return {
                aid:'',
                title:'商品评论'
            }
        },
        created(){
            this.aid = this.$route.params.id;
        },
        components:{
            CommentVue
        }
    }
</script>
<style>
    
</style>