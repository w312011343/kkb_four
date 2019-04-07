#### nuxt(SSR Server Site Render)

---

* 简而言之，Nuxt.js是帮助Vue.js轻松完成服务端渲染工作的框架。Nuxt.js预设了服务端渲染所需要的各种配置，如异步数据，中间件，路由。它好比是 [Angular Universal](https://universal.angular.io/) 之于 [Angular](https://angular.io/)， [Next.js](https://zeit.co/blog/next2) 之于 [React](https://facebook.github.io/react/)。







* 前言：nuxt 前端路由沿用了history模式，通过pushState 更改url，进而局部渲染组件
* 而首屏刷新的时候，通过后端计算并模板渲染，再将html相应给客户端，一定程度解决了首屏白屏的问题

![Nuxt运行机制（渲染层面）](assets/Nuxt运行机制（渲染层面）.png)

#### 运行流程

![nuxt-schema](C:\Users\heima\Desktop\全栈4期\22-VueJS-第14天-自定义指令、PWA、服务端渲染\4-源代码\assets\nuxt-schema.png)

#### 整体预览

* __vue前端渲染照旧(history)__
* 后端渲染补充
  * asyncData(context):  函数需要return {} ；  该数据会与组件内的data结合，在后端渲染组件前被调用
  * fetch(context):  在组件被创建前调用，用来同步Vuex内store数据
  * context属性
    * ![1530693415072](assets/1530693415072.png)



#### 便捷使用axios

* ## Install

  ```cmd
  $ npm i -S @nuxtjs/axios @nuxtjs/proxy
  ```

  ## Nuxt.config.js

  ```js
  {
    modules: [
      '@nuxtjs/axios',
      '@nuxtjs/proxy'
    ],
    proxy: [
      ['/api/dog', { target: 'https://dog.ceo/', pathRewrite: { '^/api/dog': '/api/breeds/image/random' } }]
    ]
  }
  ```

  ### Use Axios

  ```js
  // 服务端
  async asyncData({ app }) {
    const ip = await app.$axios.$get('http://icanhazip.com')
    return { ip }
  }
  // 客户端
  created() {
  	this.$axios.get('url');
  }
  ```



#### 关于部署

![1530797943839](assets/1530797943839.png)

* 1. ```npm run build ```
  2. ```cd .nuxt/dist```
  3. 配置package.json文件  scripts ,添加一项 ```start-spa: "nuxt start --spa"```
  4. 服务端渲染: ```npm run start``` (run可以省略)
  5. 单页应用:  ```npm run start-spa```


