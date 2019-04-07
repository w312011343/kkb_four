#### #### 处理跨域

* ```js
  proxyTable: {
    '/list': {
      target: 'http://api.xxxxxxxx.com',
      changeOrigin: true,
      pathRewrite: {
        '^/list': '/list'
      }
    }
  }
  ```

* 开发环境以上配置，生产环境服务器拦截ajax代理

#### 特殊场景函数

* 手动完成属性响应式
* 在vue加入元素后对元素的操作



#### 新版cli

* ```npm i -g @vue/cli ```

* vue ui 图形化



#### chrome插件

* devTools  可以看到vuex数据快照状态



#### 开发中必须要踩的坑

* 业务中给state添加属性

* ``` productionSourceMap: true,``` 加快打包速度，增大打包体积 ，依赖.map文件



#### http-server

* npm i -g http-server
*  hs -o -p 9999