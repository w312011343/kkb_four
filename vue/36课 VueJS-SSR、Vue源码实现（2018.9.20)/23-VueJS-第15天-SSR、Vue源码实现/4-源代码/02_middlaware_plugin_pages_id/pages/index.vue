<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        02_middlaware_plugin_pages_id
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      
<hr/>
{{lunbos}}

<nuxt-link :to="{name:'user-id',params:{id:8} }">去id</nuxt-link>
counter的数据: 
      {{ $store.state.counter }}
<hr/>
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  data() {},   // asyncData 返回的函数需要合并进来
  components: {
    AppLogo
  },
  // asyncData(获取数据)  fetch(同步vuex)
  async asyncData({ app }) {  // context.app
    let lunbos = await app.$axios.get('http://www.sinya.online/api/getlunbo');

    // 要求return 一个对象 类似于data函数
    return {
      lunbos:lunbos.data.message
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

