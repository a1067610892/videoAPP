<template>
  <div class="footer">
    <div class="dome" @click="jump('/',1,'Home')" :class="{active : activeIndex == 1}">
      <span>热映</span>
    </div>
    <div class="dome" @click="jump('/Lookup',2,'Lookup')" :class="{active : activeIndex == 2}">
      <span>找片</span>
    </div>
    <div class="dome" @click="jump('/My',3,'My')" :class="{active : activeIndex == 3}">
      <span>我的</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterNav',
  props: {
    activeIndex: Number
  },
  data () {
    return {
      index: 1
    }
  },
  methods: {
    jump (url, i, name) {
      this.index = i
      this.$router.push({path: url, name: name})
    }
  }
}
</script>

<style scoped>
  .footer {
    width: 10rem;
    height: 1.066667rem;
    position: fixed;
    bottom: 0;
    background: #FFF;
    display: flex;
  }
  .footer .dome {
    flex: 1;
    height: 100%;
    line-height: 1.066667rem;
    text-align: center;
  }
  .active {
    background: #eee;
  }
</style>
