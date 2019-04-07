<template>
    <div>
        {{showStus}}

        <button @click="changeFather">改变父元素的属性</button>
        
    </div>
</template>
<script>
    export default {
        props:['stus','changeHandler'],
        data(){
            return {

            }
        },
       
        methods:{
             // 2:改变父组件属性
            changeFather() {
                // this.stus = 'abc';
                this.changeHandler([]);
            }
        },
        // 1:变更显示
        computed : {
            showStus() {
                let mystus = [];
                // 子改父不是这么改动
                this.stus.forEach(ele=>{
                    mystus.push(ele.name + '先生');
                });
                return mystus;
            }
        }

    }
</script>
<style>
    
</style>