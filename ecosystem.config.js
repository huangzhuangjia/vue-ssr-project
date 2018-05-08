module.exports = {
  apps: [
    {
      name: 'nuxt-app',
      script: 'build/main.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      },
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      out_file: 'E:/pm2log/pm2-out.log',
      error_file: 'E:/pm2log/pm2-error.log'
    }
  ],
  deploy: {
    production: {
      user: 'huangzhuangjia',
      host: 'jungahuang.com',
      ref: 'origin/master',
      repo: 'git@github.com:huangzhuangjia/vue-ssr-project.git',
      path: 'E:/vue-ssr-project',
      'post-deploy': 'git pull && npm run build &&pm2 startOrReload ecosystem.config.js --env production'
    }
  }
}
