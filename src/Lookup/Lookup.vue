<template>
  <div class="lookup">
    222
    <home-nav :activeIndex="2"></home-nav>
  </div>
</template>

<script>
import HomeNav from '../common/Nav'
export default {
  name: 'Lookup',
  components: {
    HomeNav
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .lookup{
    width: 10rem;
    margin: 0 auto;
  }
</style>
