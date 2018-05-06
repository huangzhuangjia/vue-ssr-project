<template>
  <div class="ys-container">
    <y-header></y-header>
    <nuxt/>
    <y-footer></y-footer>
  </div>
</template>
<script>
  import YHeader from '../components/header/index.vue'
  import YFooter from '../components/footer/index.vue'

  export default {
    components: { YHeader, YFooter }
  }
</script>
<style>

</style>
