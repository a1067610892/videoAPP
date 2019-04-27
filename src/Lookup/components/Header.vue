<template>
  <div class="header border_bottom">
    <input type="text" value="电影/电视剧/影人">
    <nav class="border_bottom">
      电影
    </nav>
  </div>
</template>

<script>
export default {
  name: 'LookupHeader',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  /* 头部组件样式 */
  .header {
    width: 10rem;
    height: 2rem;
    text-align: center;
  }
  .header input {
    width: 9rem;
    text-align: center;
    height: .8rem;
    margin-top: .333333rem;
    background: #eee;
    border-radius: .2rem;
    color: #999;
  }
  .header nav {
    width: 10rem;
    height: .866667rem;
    line-height: .866667rem;
  }
  .header nav::before {
    border-color: black;
  }
</style>
