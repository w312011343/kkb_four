<template>
    <div>
       
        
        <button @click="change">改变父元素的属性</button>
        子组件的: {{imgs}}
    </div>
</template>
<script>
    import Bus from './EventBus.js';
    export default {
        props:['imgs'],
        data(){
            return {
                // 如果你希望有自己的个性数据，也别这个干，利用computed,展示的时候以父组件属性为主，computed为辅
                myimgs:this.imgs
            }
        },
        created() {
            console.log(this.imgs)
        },
        methods:{
            change() {
                // this.imgs = [];
                this.$emit('update:imgs',[]);
                // 该机制其实就是保存父组件的函数
                // Bus.$emit('changeStus',[1,2,3]);
            }
        },

    }
</script>
<style>
    
</style>