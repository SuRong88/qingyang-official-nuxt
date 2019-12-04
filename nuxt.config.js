export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    // script:[{
    //   src:'https://api.map.baidu.com/api?v=2.0&ak=eu0WedayzrZKPfvQAFxoVqF9zazdwbxg&s=1'
    // }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/normalize.css',
    '@/assets/css/base.less',
    '@/assets/css/layout.less',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    "@/plugins/layout.js",
    "@/plugins/request.js",
    "@/plugins/ajax.js"
  ],
  /*
   ** router配置
   *
   */
  router:{
     linkExactActiveClass: 'is-actived'
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // '@nuxtjs/axios'

  ],
  axios: {
    proxy: true,
    prefix: '/api/',
  },
  // 代理的配置项
  proxy: {
    '/api': {
      target: 'http://dz26.mrxdtech.com/api/',
      pathRewrite: {
        '^/api': '/'
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
