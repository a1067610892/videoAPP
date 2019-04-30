<template>
  <div class="my">
    <header class="header" @click="login">
      <span class="span iconfont">&#xe64e;</span>
      <span class="font">请登录</span>
    </header>
    <nav class="nav border_bottom">
      <span @click="active(0)" :class="{border_bottom: index == 0}">讨论</span>
      <span @click="active(1)" :class="{border_bottom: index == 1}">想看</span>
      <span @click="active(2)" :class="{border_bottom: index == 2}">在看</span>
      <span @click="active(3)" :class="{border_bottom: index == 3}">看过</span>
      <span @click="active(4)" :class="{border_bottom: index == 4}">影评</span>
      <span @click="active(5)" :class="{border_bottom: index == 5}">影人</span>
    </nav>
    <home-nav :activeIndex="3"></home-nav>
  </div>
</template>

<script>
import HomeNav from '../common/Nav'
export default {
  name: 'My',
  components: {
    HomeNav
  },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    active (i) {
      this.index = i
    },
    login () {
      this.$router.push({name: 'Login', path: '/Login'})
    }
  }
}
</script>

<style scoped>
  .my{
    width: 10rem;
    margin: 0 auto;
  }
  .header {
    width: 10rem;
    height: 3rem;
    background: #47c247;
    line-height: 3rem;
  }
  .span {
    width: 1.333333rem;
    display: inline-block;
    height: 1.6rem;
    font-size: 1.333333rem;
    line-height: 1.6rem;
    color: #FFF;
    margin: 0.7rem 0 0 0.5rem;
    float: left;
  }
  .nav {
    width: 10rem;
    height: .666667rem;
    line-height: .666667rem;
    display: flex;
  }
  .nav span {
    flex: 1;
    text-align: center;
    color: #999;
  }
  .nav .border_bottom::before {
    border-color: black;
  }
  .font {
    width: 1.333333rem;
    height: 1.066667rem;
    line-height: 1.066667rem;
    display: inline-block;
    float: left;
    margin: 1rem 0 0 0;
    color: #FFF;
    font-size: .32rem;
    text-align: center;
  }
</style>
