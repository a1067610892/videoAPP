<template>
  <div class="header border_bottom">
    <div class="header-top">
      <span class="header-text">北京</span>
      <input class="header-input" type="text" value="电影/电视剧/影人">
    </div>
    <nav class="header-nav">
      <div @click="listSwitching(0)" :class="{ border_bottom: index == 0 }" >正在热映</div>
      <div @click="listSwitching(1)" :class="{ border_bottom: index == 1 }">即将上映</div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      index: 0
    }
  },
  methods: {
    listSwitching (index) {
      this.index = index
    }
  }
}
</script>

<style scoped>
  /* 头部组件样式 */
  .header {
    width: 10rem;
    margin: 0 auto;
    height: 2.133333rem;
    position: fixed;
    z-index: 999;
    top: 0;
    background: #FFF;
  }
  .header-top {
    width: 100%;
    height: 1.333333rem;
    line-height: 1.333333rem;
  }
  .header-top .header-text {
    padding: 0 .266667rem;
    height: 100%;
    display: inline-block;
  }
  .header-top .header-input {
    width: 8rem;
    margin-left: .266667rem;
    background: #eee;
    height: .8rem;
    border-radius: .2rem;
    text-align: center;
    font-size: .266667rem;
  }
  .header-nav {
    width: 10rem;
    height: .8rem;
    line-height: .8rem;
    display: flex;
  }
  .header-nav .border_bottom::before {
    border-color: black;
  }
  .header-nav div {
    text-align: center;
    flex: 1;
  }
</style>
