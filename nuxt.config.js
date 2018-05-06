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
    use_mock: process.env.USE_MOCK || false,
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
   // router
  router: {
    linkActiveClass: 'router-link-active'
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/scss/index.scss', lang: 'scss' }
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'axios'
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
