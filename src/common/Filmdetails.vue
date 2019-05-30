<template>
  <div class="contentBox">
    <header class="border_bottom">
      <span @click="Return" class="iconfont return">&#xe604;</span>
      <span class="title">{{movieName}}的影评</span>
    </header>
    <div class="list">
      <div class="box" v-for="(item, index) in list" :key="index">
        <h1>{{item.title}}</h1>
        <div class="center-left">
          <img class="userhead" :src="item.author.avatar">
        </div>
        <div class="center-right">
          <div class="head">
            <span class="title">{{item.author.name}}</span>
            <span class="count">{{item.useful_count}}</span>
            <span class="iconfont Fabulous">&#xe600;</span>
          </div>
          <p>{{item.summary}}</p>
          <span class="Praisepoints">{{item.useful_count}} / {{item.useful_count + item.useless_count}} 有用</span>
          <span class="font">{{(new Date(item.created_at).getMonth()+1)}}月{{(new Date(item.created_at).getDate())}}日</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filmdetails',
  data () {
    return {
      list: [],
      movieName: ''
    }
  },
  mounted () {
    this.list = JSON.parse(this.$route.query.item)
    console.log(this.list)
    this.movieName = this.$route.query.movieName
  },
  methods: {
    Return () {
      this.$router.push({name: 'Home', path: '/'})
    }
  }
}
</script>

<style scoped>
  .contentBox {
    width: 10rem;
    margin: 0 auto;
  }
  .contentBox header {
    width: 100%;
    height: 1.066667rem;
    line-height: 1.066667rem;
    position: fixed;
    top: 0;
    left: 0;
    background: #FFF;
  }
  .contentBox .border_bottom::before {
    border-color: black;
  }
  .contentBox header .return {
    font-size: .64rem;
    width: 1.333333rem;
    height: 100%;
    display: inline-block;
    text-align: center;
    float: left;
    color: #179717;
  }
  .contentBox header .title {
    height: 100%;
    display: inline-block;
    float: left;
    text-align: center;
    font-size: .373333rem;
  }
  .list .box h1 {
    font-size: .533333rem;
    font-weight: bold;
    line-height: .733333rem;
    margin-bottom: .133333rem;
  }
  .list {
    width: 9rem;
    background: #fff;
    padding: 0 0.5rem;
    margin-top: 1.066667rem;
  }
  .list .title {
    font-weight: bold;
    font-size: .346667rem;
  }
  .list .Fabulous {
    float: right;
    margin-right: .2rem;
    color: #999;
  }
  .list .count {
    float: right;
    color: #ccc;
    font-size: .32rem;
  }
  .list .box {
    width: 100%;
    padding: .266667rem 0;
  }
  .list .center-left {
    width: 1rem;
    display: inline-block;
    float: left;
  }
  .list .center-left .userhead {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
  }
  .list .center-right {
    width: 8rem;
    display: inline-block;
  }
  .list .center-right>.head {
    width: 100%;
    height: .8rem;
    line-height: .8rem;
  }
  .list .center-right p {
    line-height: .533333rem;
    font-size: .346667rem;
    color: #ccc;
  }
  .list .font {
    clear: both;
    color: #ccc;
    font-size: .32rem;
    margin-top: .133333rem;
    display: inline-block;
    float: right;
  }
  .list .Praisepoints {
    clear: both;
    color: #ccc;
    font-size: .32rem;
    margin-top: .133333rem;
    display: inline-block;
  }
</style>
