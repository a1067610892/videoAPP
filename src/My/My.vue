<template>
  <div class="my">
    <header class="header">
      <span class="span iconfont">&#xe64e;</span>
      <span class="font">请登录</span>
    </header>
    <nav class="nav border_bottom">
      <span>讨论</span>
      <span>想看</span>
      <span>在看</span>
      <span>看过</span>
      <span>影评</span>
      <span>影人</span>
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
    return {}
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
