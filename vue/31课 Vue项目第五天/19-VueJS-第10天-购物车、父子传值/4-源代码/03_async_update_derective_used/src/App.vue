<template>
  <div id="app">
    父组件的：{{imgs}}
    <hr/>
    <son  v-bind:imgs.sync="imgs"/>
  </div>
</template>

<script>
import Bus from './EventBus.js';

export default {
  created() {
      setTimeout(()=> {
        this.imgs = [1,2,3];
      },2000);
  },
  name: 'app',
  data () {
    return {
      imgs:[]
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
