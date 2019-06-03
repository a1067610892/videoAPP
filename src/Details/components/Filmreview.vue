<template>
  <div class="filmreview">
    <header class="header">
      <span class="header-left">影评</span>
      <button class="header-right border">写影评</button>
    </header>
    <div class="center">
      <div class="box" v-if="index < 5" v-for="(item, index) in list" :key="index">
        <h1>{{item.title}}</h1>
        <span class="authorname">{{item.author.name}}</span>
        <p>{{item.summary}}</p>
        <div class="paragraph"><span>{{item.useful_count}} / {{item.useful_count + item.useless_count}}</span><span>有用</span></div>
      </div>
      <div class="footer" @click="content">
        全部影评{{list.length}}个
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    name: String,
    id: String
  },
  name: 'filmreview',
  data () {
    return {
    }
  },
  methods: {
    content () {
      this.$router.push({
        path: '/FilmDetails',
        name: 'FilmDetails',
        query: {
          item: JSON.stringify(this.list),
          movieName: this.name,
          nameId: this.id
        }})
    }
  }
}
</script>

<style scoped>
  .filmreview {
    width: 10rem;
    margin: 0 auto;
  }
  .header {
    width: 9rem;
    height: 1.066667rem;
    line-height: 1.066667rem;
    background: #eee;
    padding: 0 0.5rem;
  }
  .header .header-left {
    width: 1.6rem;
    height: .8rem;
    display: inline-block;
    color: black;
    font-size: .293333rem;
    line-height: .8rem;
  }
  .header .header-right {
    width: 1.4rem;
    height: .6rem;
    background: #FFF;
    color: #179717;
    float: right;
    font-size: .266667rem;
    margin-top: .2rem;
  }
  .header .border::before {
    border-color: #179717;
    border-radius: .2rem;
  }
  .center {
    width: 9rem;
    background: #eee;
    padding: 0 0.5rem;
  }
  .center .box {
    width: 100%;
    padding: .266667rem 0;
  }
  .center .box h1 {
    font-size: .48rem;
    font-weight: bold;
    line-height: .666667rem;
    margin-bottom: .133333rem;
  }
  .center .box .authorname {
    width: 100%;
    display: block;
    height: .666667rem;
    line-height: .666667rem;
    font-size: .32rem;
  }
  .center .box p {
    color: #999;
    font-size: .346667rem;
  }
  .center .box .paragraph {
    color: #999;
    width: 100%;
    height: .666667rem;
    line-height: .666667rem;
    font-size: .32rem;
  }
  .footer {
    text-align: center;
    color: #179717;
    font-size: .32rem;
    height: 1.066667rem;
    line-height: 1.066667rem;
  }
</style>
