<template>
  <div class="ys-wrapper ys-school-announcement-wrapper">
    学院公告
  </div>
</template>

<script>
export default {
  name: 'schoolAnnouncement',

  scrollToTop: true,

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