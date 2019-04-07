<template>
  <div id="app">
    父组件的：{{stus}}
    <hr/>
    <son :stus="stus"/>
  </div>
</template>

<script>
import Bus from './EventBus.js';

export default {
  created() {
     // 父先监听
     Bus.$on('changeStus',(data)=> {
        // 这里的this是Bus
        console.log(this);
        this.stus = data;
     });
  },
  name: 'app',
  data () {
    return {
      stus:[{name:'张三'},{name:'张四'}]
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
