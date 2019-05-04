<template>
  <div>
    <div class="header">
      <span @click="Return" class="iconfont return">&#xe604;</span>
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
    return {}
  },
  methods: {
    Return () {
      this.$router.push({name: 'Home', path: '/'})
    }
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
  }
  .return {
    width: 1.066667rem;
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
    margin-top: 1.333333rem;
    background: #999;
  }
  .imgbox img {
    width: 3.466667rem;
    height: 5.066667rem;
    border-radius: .2rem;
    margin: .266667rem 0;
  }
</style>
