<template>
  <div class="login">
    <span @click="Return" class="iconfont return">&#xe604;</span>
    <h1 class="title">欢迎来到豆瓣</h1>
    <input class="text" type="text" placeholder="手机号">
    <input class="password" type="text" placeholder="密码">
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  methods: {
    Return () {
      this.$router.push({name: 'My', path: '/My'})
    }
  }
}
</script>

<style scoped>
  .login {
    width: 10rem;
    margin: 0 auto;
  }
  .return {
    width: 10rem;
    height: 1.066667rem;
    line-height: 1.066667rem;
    color: #179717;
    font-size: .64rem;
    font-weight: bold;
    display: block;
    padding-left: .266667rem;
    margin-bottom: 1.6rem;
  }
  .title {
    text-align: center;
    font-size: .853333rem;
    color: #179717;
    height: 1.333333rem;
    line-height: 1.333333rem;
    margin-bottom: .666667rem;
  }
  .text {
    width: 9rem;
    margin: 0 0.5rem .4rem 0.5rem;
    height: 1.066667rem;
    line-height: 1.066667rem;
    border-bottom: .013333rem solid #999;
  }
  .password {
    width: 9rem;
    margin: 0 0.5rem;
    height: 1.066667rem;
    line-height: 1.066667rem;
    border-bottom: .013333rem solid #999;
  }
</style>
