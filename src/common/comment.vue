<template>
  <div>
    <header class="header border-top">
      <span class="header-left">{{index == 0 ? '短评' : '影评'}}</span>
      <button class="header-right border">{{index == 0 ? '写短评' : '写影评'}}</button>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    index: Number
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
</style>
