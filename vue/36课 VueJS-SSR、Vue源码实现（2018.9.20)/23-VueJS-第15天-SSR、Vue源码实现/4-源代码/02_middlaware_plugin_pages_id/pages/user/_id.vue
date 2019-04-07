<template>
    <div>
        {{ lunbos }}
 {{ $store.state.counter }}
    </div>
</template>
<script>
    export default {
         validate ({ params }) {
            // Must be a number
            return /^\d+$/.test(params.id)
          },
        data(){
            return {

            }
        },
        async asyncData({ params,app }) {
            console.log(params);
            let lunbos = await app.$axios.get('http://www.sinya.online/api/getlunbo');
                // 要求return 一个对象 类似于data函数
                return {
                  lunbos:lunbos.data.message
                }
        },
        // 需要同步后台（DB）当前的counter
        async fetch({app,store}) {

           let res =  await app.$axios.get('http://www.sinya.online/api/getlunbo');
           let len = res.data.message.length; // 2
           // 这里不是组件对象，不要使用this
           store.commit('changeCounter',len);
        }
    }
</script>
<style>
    
</style>