<template>
    <div>
       
        
        <button @click="change">改变父元素的属性</button>
        子组件的: {{stus}}
    </div>
</template>
<script>
    import Bus from './EventBus.js';
    export default {
        props:['stus'],
        data(){
            return {

            }
        },
        methods:{
            change() {
                // 该机制其实就是保存父组件的函数
                Bus.$emit('changeStus',[1,2,3]);
            }
        },

    }
</script>
<style>
    
</style>