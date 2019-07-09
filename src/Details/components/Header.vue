<template>
  <div>
    <div v-show="hideshow" class="header" :style="opacityStyle">
      <span @click="Return" class="iconfont return">&#xe604;</span>
      <span class="font">电影</span>
      <span class="iconfont return"></span>
    </div>
    <div v-show="!hideshow" class="header">
      <span @click="Return" class="iconfont return">&#xe604;</span>
      <span class="font">{{list.title}}</span>
      <span class="iconfont return"></span>
    </div>
    <div class="imgbox">
      <img :src="list.images.large">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Object
  },
  name: 'DetailsHeader',
  data () {
    return {
      hideshow: true,
      opacityStyle: {
        background: 'rgba( 153,153,153,0)'
      }
    }
  },
  methods: {
    Return () {
      this.$router.push({name: 'Home', path: '/'})
    },
    handleScroll (event) {
      this.num = document.documentElement.scrollTop
      const top = document.documentElement.scrollTop
      if (top > 280) {
        this.opacityStyle = { background: 'rgba( 153,153,153,1)' }
        this.hideshow = false
      } else {
        this.opacityStyle = { background: 'rgba( 153,153,153,0.2)' }
        this.hideshow = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
  .header{
    width: 10rem;
    margin: 0 auto;
    height: 1.333333rem;
    line-height: 1.333333rem;
    background: #999;
    position: fixed;
    top: 0;
    z-index: 99;
    display: flex;
  }
  .header .font {
    height: 100%;
    line-height: 1.333333rem;
    display: inline-block;
    flex: 1;
    text-align: center;
    color: #FFF;
    font-size: .426667rem;
  }
  .return {
    width: 1.6rem;
    height: 100%;
    line-height: 1.333333rem;
    display: inline-block;
    text-align: center;
    color: #FFF;
    font-size: .64rem;
  }
  .imgbox {
    width: 10rem;
    height: 6rem;
    text-align: center;
    padding-top: 1.333333rem;
    background: #999;
  }
  .imgbox img {
    width: 3.466667rem;
    height: 5.066667rem;
    border-radius: .2rem;
    margin: .266667rem 0;
  }
</style>
