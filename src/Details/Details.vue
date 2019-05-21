<template>
  <div class="details">
    <details-header :list="list"></details-header>
    <details-content :list="list"></details-content>
    <details-casts :list="list"></details-casts>
    <nav class="nav">
      <a class="border_bottom">评论</a>
      <a>讨论</a>
    </nav>
    <comment :listArr="ShortArr"></comment>
  </div>
</template>

<script>
import DetailsHeader from './components/Header'
import DetailsContent from './components/Content'
import DetailsCasts from './components/Casts'
import Comment from '@/common/comment'
export default {
  name: 'Details',
  components: {
    DetailsHeader,
    DetailsContent,
    DetailsCasts,
    Comment
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
      },
      ShortArr: [],
      FilmArr: []
    }
  },
  mounted () {
    this.details(this.$route.query.id)
  },
  methods: {
    details (id) {
      // this.axios.get(`/video/${id}?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=&udid=`).then((res) => {
      //   this.list = res.data
      //   console.log(res)
      // })
      /* app */
      this.axios.get(`http://api.douban.com/v2/movie/subject/${id}?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=&udid=`).then((res) => {
        this.list = res.data
      })
      /* 获取影评 */
      // this.axios.get(`/video/${id}/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b`).then((res) => {
      //   console.log(res, '影评')
      //   this.FilmArr = res.data.reviews
      // })
      /* APP */
      this.axios.get(`http://api.douban.com/v2/movie/subject/${id}/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b`).then((res) => {
        this.FilmArr = res.data.reviews
      })
      /* 获取剧照 */
      // this.axios.get(`/video/${id}/photos?apikey=0b2bdeda43b5688921839c8ecb20399b`).then((res) => {
      //   console.log(res)
      // })
      /* 获取短评 */
      // this.axios.get(`/video/${id}/comments?apikey=0b2bdeda43b5688921839c8ecb20399b`).then((res) => {
      //   console.log(res, '短评')
      //   this.ShortArr = res.data.comments
      // })
      /* APP */
      this.axios.get(`http://api.douban.com/v2/movie/subject/${id}/comments?apikey=0b2bdeda43b5688921839c8ecb20399b`).then((res) => {
        this.ShortArr = res.data.comments
      })
    }
  }
}
</script>

<style scoped>
  .details{
    width: 10rem;
    margin: 0 auto;
  }
  .nav {
    width: 10rem;
    height: 1.066667rem;
    line-height: 1.066667rem;
    background: #eee;
    display: flex;
  }
  .nav a {
    flex: 1;
    text-align: center;
    height: 1.066667rem;
    color: black;
  }
  .nav .border_bottom::before {
    border-color: black;
  }
</style>
