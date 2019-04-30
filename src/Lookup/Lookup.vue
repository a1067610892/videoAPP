<template>
  <div class="lookup">
    <lookup-header></lookup-header>
    <common-nav :activeIndex="2"></common-nav>
    <lookup-list :list="list"></lookup-list>
  </div>
</template>

<script>
import CommonNav from '../common/Nav'
import LookupHeader from './components/Header'
import LookupList from './components/List'
export default {
  name: 'Lookup',
  components: {
    CommonNav,
    LookupHeader,
    LookupList
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    // getData () {
    //   this.axios.get(`/api/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=北京&start=0&count=39&client=&udid=""`).then((res) => {
    //     console.log(res)
    //     this.list = res.data.subjects
    //   })
    // }
    /* APP */
    getData () {
      this.axios.get(`https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=北京&start=0&count=39&client=&udid=""`).then((res) => {
        this.list = res.data.subjects
      })
    }
  }
}
</script>

<style scoped>
  .lookup{
    width: 10rem;
    margin: 0 auto;
  }
</style>
