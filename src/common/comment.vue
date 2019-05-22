<template>
  <div>
    <header class="header border-top">
      <span class="header-left">短评</span>
      <button class="header-right border">写短评</button>
    </header>
    <div class="center">
      <div v-if="index < 4" class="box" v-for="(item, index) in listArr" :key="index">
        <div class="center-left">
          <img class="userhead" :src="item.author.avatar">
        </div>
        <div class="center-right">
          <header>
            <span class="title">{{item.author.name}}</span>
            <span class="count">{{item.useful_count}}</span>
            <span class="iconfont Fabulous">&#xe600;</span>
          </header>
          <p>{{item.content}}</p>
          <span class="font">{{(new Date(item.created_at).getMonth()+1)}}月{{(new Date(item.created_at).getDate())}}日</span>
        </div>
      </div>
      <div class="footer border_bottom">
        全部短评{{listArr.length}}个
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listArr: Array
  },
  name: 'comment',
  data () {
    return {}
  },
  methods: { }
}
</script>

<style scoped>
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
  .center .title {
    font-weight: bold;
    font-size: .346667rem;
  }
  .center .Fabulous {
    float: right;
    margin-right: .2rem;
    color: #999;
  }
  .center .count {
    float: right;
    color: #ccc;
    font-size: .32rem;
  }
  .center .box {
    width: 100%;
    padding: .266667rem 0;
  }
  .center .center-left {
    width: 1rem;
    display: inline-block;
    float: left;
  }
  .center .center-left .userhead {
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
  }
  .center .center-right {
    width: 8rem;
    display: inline-block;
  }
  .center .center-right>header {
    width: 100%;
    height: .8rem;
    line-height: .8rem;
  }
  .center .center-right p {
    line-height: .533333rem;
    font-size: .346667rem;
  }
  .center .font {
    clear: both;
    color: #ccc;
    font-size: .32rem;
    margin-top: .133333rem;
    display: block;
  }
  .footer {
    text-align: center;
    color: #179717;
    font-size: .32rem;
    height: 1.066667rem;
    line-height: 1.066667rem;
  }
  .border_bottom::before {
    border-color: #ccc;
  }
</style>
