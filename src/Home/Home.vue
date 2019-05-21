<template>
  <div class="home">
    <home-header></home-header>
    <home-List></home-List>
    <home-nav :activeIndex="1"></home-nav>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeList from './components/List'
import HomeNav from '../common/Nav'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeList,
    HomeNav
  },
  data () {
    return {}
  },
  watch: {
    '$route': function () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style scoped>
  .home{
    width: 10rem;
    margin: 0 auto;
  }
</style>
