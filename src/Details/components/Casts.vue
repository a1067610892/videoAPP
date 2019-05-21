<template>
  <div>
    <div class="casts">
      <h1>影人</h1>
      <div class="item">
        <img :src="list.directors[0].avatars.large">
        <h2>{{list.directors[0].name}}</h2>
        <p>导演</p>
      </div>
      <div class="item" v-for="(item, index) in list.casts" :key="index">
        <img :src="item.avatars.large">
        <h2>{{item.name}}</h2>
        <p>演员</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Object
  },
  name: 'Detailscasts',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
  .casts {
    width: 9rem;
    padding: .266667rem 0.5rem;
    background: #eee;
    height: 2.8rem;
  }
  .casts h1 {
    font-size: .266667rem;
    color: #999;
  }
  .item {
    width: 1.6rem;
    float: left;
    margin: .133333rem .133333rem 0 0;
    text-align: center;
  }
  .item img {
    width: 1.6rem;
    height: 1.733333rem;
  }
  .item h2 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: .4rem;
    line-height: .4rem;
  }
  .item p {
    height: .4rem;
    line-height: .4rem;
  }
</style>
