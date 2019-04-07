<template>
  <div id="app">
      <!-- 可以用，不建议 
      {{ $store.state.num  }}
      {{ $store.getters.getNum }} -->

      {{ getNum }}
      {{ getText }}
      名称:{{ getName }}

      <button @click="add">添加数量</button>
      <button @click="addByNum">添加一定数量</button>
      <button @click="addByNumAsync">异步mutation添加一定数量</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { mapGetters } from 'vuex';


export default {
  name: 'app',
  components: {
    HelloWorld
  },
  // 开发必踩坑 开始
  created() {
    setTimeout(()=>{
         // 在原有属性添加数量，ok
         // this.$store.dispatch('addByNumAction',20);
         // 新添加一个属性, 不ok
         this.$store.dispatch('addProps','jack');
    },1000);
  },
  // 开发必踩坑 结束
  methods:{
    add(){
        // 不建议直接这么搞
        this.$store.commit('addNum');
    },
    addByNum() {
        // 不建议直接这么搞
        this.$store.commit('addByNum',10);
    },
    addByNumAsync () {
       // 不建议直接这么搞
       // this.$store.commit('addByNumAsync',20);
       // 异步处理需要调用action
       this.$store.dispatch('addByNumAction',20);
    }
  },
  // getters结合computed使用
  computed:{
    ...mapGetters([
      'getNum',
      'getText',
      'getName'
    ])
    // getMyNum() {
    //   return this.$store.getters.getNum;
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
