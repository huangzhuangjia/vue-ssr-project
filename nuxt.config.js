module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Y学院',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  dev: (process.env.NODE_ENV !== 'production'),
  //设置mock数据下的环境变量
  env: {
    USE_MOCK: process.env.USE_MOCK || false,
    MOCK_PORT: process.env.MOCK_PORT || process.env.npm_package_mockPort //json-server端口号
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/scss/index.scss', lang: 'scss' }
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fbe037' },
  // router
  router: {
    linkActiveClass: 'router-link-active'
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: [
      'axios'
    ],
    // postcss
    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')()
    ],
    // babel
    babel: {
      presets: ['es2015', 'stage-2'],
      plugins: [
        'transform-async-to-generator',
        'transform-runtime'
      ]
    },
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.isClient) {
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
