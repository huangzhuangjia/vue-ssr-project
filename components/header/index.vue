<template>
  <div class="ys-header">
    <div class="ys-header-inner">
      <nuxt-link to="/" class="ys-logo"></nuxt-link>
      <ul class="ys-nav clearfix">
        <li class="fl" v-for="nav in navList"><nuxt-link :to="nav.path">{{nav.name}}</nuxt-link></li>
      </ul>
      <div class="ys-login-box">
        <i class="icon-user"></i>
        <a @click="login">登陆</a>
        <span class="line"></span>
        <a>注册</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navList: [
          {
            name: '视频分类',
            path: '/videoSort'
          },
          {
            name: '学院公告',
            path: '/schoolAnnouncement'
          }, 
          {
            name: '解封申诉',
            path: '/unsealAppeal'
          }
        ]
      }
    },
    methods: {
      login () {
        this.$store.dispatch('login')
      }
    }
  }
</script>

<style lang='scss' scoped>
@import "@/assets/scss/variable.scss";

.ys-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-width: $wrapper-width;
  height: $header-height;
  font-size: $font-size-header;
  background-color: $white;
  color: $text;
  z-index: 999;
  .ys-header-inner {
    position: relative;
    width: $wrapper-width;
    height: 100%;
    margin: 0 auto;
    .ys-logo {
      position: relative;
      left: 0;
      top: 20px;
      display: inline-block;
      width: 136px;
      height: 40px;
      background: url(../../assets/img/logo.png) no-repeat;
    }
    .ys-nav {
      position: absolute;
      top: 24px;
      display: inline-block;
      margin-left: 60px;
      a {
        display: inline-block;
        width: 96px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        border-radius: 16px;
        margin-right: 16px;
        &.router-link-active {
          background-color: $nav-active-color;
        }
      }
    }
    .ys-login-box {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 12px;
      height: 100%;
      line-height: 80px;
      .icon-user {
        position: relative;
        top: 3px;
        margin-right: 3px;
        display: inline-block;
        width: 14px;
        height: 16px;
        background: url(../../assets/img/ic_user.png) no-repeat;
      }
      .line {
        display: inline-block;
        vertical-align: middle;
        background: #e8e8e8;
        width: 1px;
        height: 12px;
        overflow: hidden;
        margin: 0 8px;
      }
    }
  }
}
</style>
