<template>
  <div class="ys-wrapper ys-school-announcement-wrapper">
    yy学院公告
  </div>
</template>

<script>
export default {
  name: 'schoolAnnouncement',

  data () {
    return {
      user: {}
    }
  },

  scrollToTop: true,

  async asyncData ({store}) {
    // const res = await store.dispatch('login')
    // return {user: res.data}
  },

  fetch ({ store, params }) {
    return store.dispatch('login')
  },

  head () {
    return {
      title: 'Y学院-学院公告'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
