<template>
  <div class="details">
    <details-header :list="list"></details-header>
    <details-content :list="list"></details-content>
    <details-casts :list="list"></details-casts>
    <nav class="nav border_bottom">
      <a class="border_bottom">评论</a>
      <a>讨论</a>
    </nav>
    <comment :listArr="ShortArr" :name="movieName" :id="videoId" :index="$route.query.listIndex"></comment>
    <details-filmreview :list="FilmArr" :name="movieName" :id="videoId" :index="$route.query.listIndex"></details-filmreview>
  </div>
</template>

<script>
import DetailsHeader from './components/Header'
import DetailsContent from './components/Content'
import DetailsCasts from './components/Casts'
import DetailsFilmreview from './components/Filmreview'
import Comment from '@/common/comment'
export default {
  name: 'Details',
  components: {
    DetailsHeader,
    DetailsContent,
    DetailsCasts,
    Comment,
    DetailsFilmreview
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
      FilmArr: [],
      movieName: '',
      videoId: '',
      listId: [],
      indexId: 0,
      arrList: [],
      short: [],
      film: []
    }
  },
  mounted () {
    this.listId[0] = this.$route.query.id
    this.details(this.$route.query.id)
  },
  methods: {
    details (id) {
      this.axios.get(`/video/${id}?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=&udid=`).then((res) => {
        this.list = res.data
        this.arrList.push(this.list)
        this.videoId = id
        this.movieName = res.data.title
      })
      /* app */
      // this.axios.get(`http://api.douban.com/v2/movie/subject/${id}?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=&udid=`).then((res) => {
      //   this.list = res.data
      // })
      /* 获取影评 */
      this.axios.get(`/video/${id}/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b`).then((res) => {
        console.log(res, '影评')
        this.FilmArr = res.data.reviews
        this.film.push(this.FilmArr)
      })
      /* APP */
      // this.axios.get(`http://api.douban.com/v2/movie/subject/${id}/reviews?apikey=0b2bdeda43b5688921839c8ecb20399b`).then((res) => {
      //   this.FilmArr = res.data.reviews
      // })
      /* 获取剧照 */
      // this.axios.get(`/video/${id}/photos?apikey=0b2bdeda43b5688921839c8ecb20399b`).then((res) => {
      //   console.log(res)
      // })
      /* 获取短评 */
      this.axios.get(`/video/${id}/comments?apikey=0b2bdeda43b5688921839c8ecb20399b`).then((res) => {
        console.log(res, '短评')
        this.ShortArr = res.data.comments
        this.short.push(this.ShortArr)
      })
      /* APP */
      // this.axios.get(`http://api.douban.com/v2/movie/subject/${id}/comments?apikey=0b2bdeda43b5688921839c8ecb20399b`).then((res) => {
      //   this.ShortArr = res.data.comments
      // })
      if (this.indexId === 0) {
        setTimeout(() => {
          this.indexId = this.indexId + 1
        }, 30)
      }
    }
  },
  activated () {
    console.log(this.listId)
    if (this.listId[this.$route.query.listIndex] !== this.$route.query.id) {
      console.log(this.arrList)
      console.log(this.short)
      console.log(this.film)
      this.details(this.$route.query.id)
      this.listId.push(this.$route.query.id)
    } else if (this.listId[this.$route.query.listIndex] === this.$route.query.id && this.indexId !== 0) {
      this.list = this.arrList[this.$route.query.listIndex]
      this.ShortArr = this.short[this.$route.query.listIndex]
      this.FilmArr = this.film[this.$route.query.listIndex]
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
    background: #ccc;
    display: flex;
  }
  .nav a {
    flex: 1;
    text-align: center;
    height: 1.066667rem;
    color: black;
  }
  .border-top::before {
    border-color: #ccc;
  }
  .border_bottom::before {
    border-color: #ccc;
  }
  .nav .border_bottom::before {
    border-color: black;
  }
</style>
