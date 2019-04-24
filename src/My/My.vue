<template>
  <div class="my">
    我的
    <home-nav :activeIndex="3"></home-nav>
  </div>
</template>

<script>
import HomeNav from '../common/Nav'
export default {
  name: 'My',
  components: {
    HomeNav
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .my{
    width: 10rem;
    margin: 0 auto;
  }
</style>
