<template>
  <div class="List">
    <div class="dome" v-for="(item, index) in list" :key="index">
      <img class="img" :src="item.images.large">
      <h1 class="title">{{item.title}}</h1>
      <span class="span" v-if="item.rating.average !== 0">{{(item.rating.average.toString()).length == 1 ? item.rating.average + '.0' : item.rating.average }}</span>
      <span class="span" v-if="item.rating.average == 0">暂无评分</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lookup',
  props: {
    list: Array
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .List {
    width: 10rem;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .List .dome {
    width: 2.8rem;
    height: 5.066667rem;
    text-align: center;
    padding: .133333rem .266667rem;
  }
  .List .dome .img {
    width: 100%;
    height: 4rem;
    border-radius: .2rem;
  }
  .title {
    margin-top: .133333rem;
    font-size: .32rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .span {
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    display: inline-block;
    margin-top: .133333rem;
    font-size: .266667rem;
  }
</style>
