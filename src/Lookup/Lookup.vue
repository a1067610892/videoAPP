<template>
  <div class="lookup">
    <lookup-header></lookup-header>
    <common-nav :activeIndex="2"></common-nav>
  </div>
</template>

<script>
import CommonNav from '../common/Nav'
import LookupHeader from './components/Header'
export default {
  name: 'Lookup',
  components: {
    CommonNav,
    LookupHeader
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
