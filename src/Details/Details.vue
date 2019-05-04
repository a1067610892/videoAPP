<template>
  <div class="details">
    <details-header :list="list"></details-header>
    <details-content :list="list"></details-content>
    <details-casts :list="list"></details-casts>
  </div>
</template>

<script>
import DetailsHeader from './components/Header'
import DetailsContent from './components/Content'
import DetailsCasts from './components/Casts'
export default {
  name: 'Details',
  components: {
    DetailsHeader,
    DetailsContent,
    DetailsCasts
  },
  data () {
    return {
      list: {
        rating: {},
        pubdates: [],
        durations: [],
        summary: '',
        images: {},
        directors: [{
          avatars: ''
        }]
      }
    }
  },
  mounted () {
    this.details(this.$route.query.id)
  },
  methods: {
    details (id) {
      this.axios.get(`/video/${id}?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=&udid=`).then((res) => {
        this.list = res.data
        console.log(res)
      })
      /* app */
      // this.axios.get(`http://api.douban.com/v2/movie/subject/${id}?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=&udid=`).then((res) => {
      //   this.list = res.data
      // })
    }
  }
}
</script>

<style scoped>
  .details{
    width: 10rem;
    margin: 0 auto;
  }
</style>
