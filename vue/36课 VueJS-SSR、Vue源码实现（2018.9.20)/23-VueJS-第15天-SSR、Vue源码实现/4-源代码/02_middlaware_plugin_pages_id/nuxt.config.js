module.exports = {
  // 路由改变会被调用
  router: {
    middleware: 'console'
  } ,
  plugins:['~/plugins/installMixin'],
  // 便捷使用axios
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  // 跨域代理
  proxy: [
    ['/api/dog', { target: 'https://dog.ceo/', pathRewrite: { '^/api/dog': '/api/breeds/image/random' } }]
  ],

  /*
  ** Headers of the page
  */
  head: {
    title: '02_middlaware_plugin_pages_id',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

