<template>
  <div>
    <div class="list" v-if="onLine == true">
      <div class="dome border_bottom" v-for="(item, index) in list" :key="index">
        <img class="list-img" :src="item.images.large">
        <div class="right">
          <div class="list-left">
            <h1 class="list-title">{{item.title}}</h1>
            <h2 class="average">{{item.rating.average == 0 ? '暂无评分' : item.rating.average}}</h2>
            <div class="director">导演：{{item.directors[0].name}}</div>
            <div class="performer"><span>主演：</span><span v-for="(performer, index) in item.casts" :key="index">{{performer.name}}<span v-if="index + 1 != item.casts.length"> / </span></span></div>
          </div>
          <div class="list-right">
            <span class="count">{{item.collect_count}}人看过</span>
            <button class="border">购票</button>
          </div>
        </div>
      </div>
    </div>
    <div class="onLine" v-if="onLine == false">
      <p>网络无连接，请检查网络设置</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeList',
  data () {
    return {
      list: [],
      onLine: true
    }
  },
  mounted () {
    this.offline()
  },
  methods: {
    /* 判断是否有网络 */
    offline () {
      if (navigator.onLine === false) {
        this.onLine = false
      } else {
        this.onLine = true
        this.getData()
      }
    },
    // getData () {
    //   this.axios.get(`/api/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=北京&start=0&count=39&client=&udid=""`).then((res) => {
    //     console.log(res)
    //     this.list = res.data.subjects
    //     this.addZero(this.list)
    //     this.count(this.list)
    //   })
    // },
    /* APP */
    getData () {
      this.axios.get(`https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=北京&start=0&count=39&client=&udid=""`).then((res) => {
        this.list = res.data.subjects
        this.addZero(this.list)
        this.count(this.list)
      })
    },
    /* 评分人数简化 */
    count (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].collect_count > 10000) {
          arr[i].collect_count = ((arr[i].collect_count / 10000).toFixed(2).slice(0, -1)) + '万'
        }
      }
    },
    /* 补零 */
    addZero (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].rating.average === 1 || arr[i].rating.average === 2 || arr[i].rating.average === 3 || arr[i].rating.average === 4 || arr[i].rating.average === 5 || arr[i].rating.average === 6 || arr[i].rating.average === 7 || arr[i].rating.average === 8 || arr[i].rating.average === 9) {
          arr[i].rating.average = arr[i].rating.average + '.0'
        }
      }
    }
  }
}
</script>

<style scoped>
  .list {
    width: 10rem;
    margin-top: 2.146667rem;
  }
  .dome {
    width: 10rem;
    height: 4.266667rem;
  }
  .dome .list-img {
    width: 2.533333rem;
    height: 3.2rem;
    padding: .533333rem .266667rem;
    float: left;
  }
  .dome .right {
    width: 6.9rem;
    height: 100%;
    float: right;
  }
  .dome .right .list-left {
    width: 65%;
    float: left;
    height: 100%;
  }
  .dome .list-title {
    padding-top: .533333rem;
    font-weight: bold;
    font-size: .426667rem;
    line-height: .533333rem;
  }
  .average {
    margin-top: .266667rem;
  }
  /* 导演 */
  .director {
    color: #999;
    font-size: .266667rem;
    margin-top: .133333rem;
  }
  /* 演员 */
  .performer {
    width: 90%;
    color: #999;
    margin-top: .133333rem;
    font-size: .266667rem;
    line-height: .4rem;
  }
  .dome .right .list-right {
    width: 35%;
    float: right;
    height: 100%;
  }
  .dome .right .list-right .count {
    color: #f48787;
    padding-top: 1.066667rem;
    display: block;
    font-size: .32rem;
  }
  .dome .right .list-right button {
    width: 1.6rem;
    height: .8rem;
    background: transparent;
    margin-top: .266667rem;
    color: #f48787;
  }
  .dome .right .list-right .border::before {
    border-color: #f48787;
    border-radius: .4rem;
  }
  .dome:last-child {
    padding-bottom: .8rem;
  }
  .onLine {
    width: 10rem;
    position: absolute;
    margin: 2.146667rem auto 0 auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .onLine p{
    position: relative;
    top: 45%;
    font-size: .533333rem;
    text-align: center;
  }
</style>
