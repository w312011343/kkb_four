<template>
  <div id="app">
   <div id="hook-arguments-example" v-demo:foo.a.b="'a'+ 'b'"></div>
   <!-- v-on:click="xxx" -->

   <!-- <div id="hook-arguments-example" v-demo:foo.a.b="message"></div> -->

  
    <!-- 1: 按钮点击，让页面出现input元素 -->
    <button @click="addInput">插入元素</button>
    <!-- 2: input自动获取焦点 -->
    <input type="" name="" v-if="isShow" ref="input">
    <!-- <input type="" name="" v-if="isShow" v-focus> -->
    <!-- 3: 结合指令做 -->



  </div>
</template>

<script>
export default {
  methods:{
    addInput() {
      this.isShow = !this.isShow; // 不会立刻产生元素
      // 再vue异步渲染完成以后，让元素获取焦点()
      this.$nextTick(function(){
         this.$refs.input.focus();
      });
    }
  },
  directives:{
    // v-focus使用
    focus:{
      // bind: // 初始化
      // 元素被插入的时候 , this.$refs.xxx
      inserted:function (el) {
        console.log(el);
           el.focus();
      }
    }
  },
  name: 'app',
  data () {
    return {
      isShow:false,
      message:'abc',
      msg: 'Welcome to Your Vue.js App'
    }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
