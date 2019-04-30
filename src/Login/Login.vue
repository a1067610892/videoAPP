<template>
  <div class="login">
    <span @click="Return" class="iconfont return">&#xe604;</span>
    <h1 class="title">欢迎来到豆瓣</h1>
    <input class="text" type="text" placeholder="手机号">
    <input class="password" type="text" placeholder="密码">
    <button class="btn">登录</button>
    <div class="register">
      <span class="one active">注册豆瓣</span>
      <span class="two">|</span>
      <span class="one">忘记密码</span>
    </div>
    <footer>
      <span class="iconfont">&#xe610;</span>
      <span>QQ登录</span>
      <span class="center">|</span>
      <span class="iconfont">&#xe793;</span>
      <span>微信登录</span>
    </footer>
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
    height: 1.066667rem;
    line-height: 1.066667rem;
    color: #179717;
    font-size: .64rem;
    font-weight: bold;
    display: block;
    padding-left: .266667rem;
    margin-bottom: 2.5rem;
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
  .btn {
    width: 9rem;
    height: 1.066667rem;
    line-height: 1.066667rem;
    margin: .4rem 0 0 0.5rem;
    color: #FFF;
    background: #179717;
    border-radius: .2rem;
  }
  .register {
    width: 10rem;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    margin-top: .4rem;
    font-size: .32rem;
  }
  .active {
    color: #179717;
  }
  .register .two {
    width: .8rem;
    display: inline-block;
    height: 100%;
  }
  footer {
    width: 10rem;
    height: 1.066667rem;
    line-height: 1.066667rem;
    position: fixed;
    bottom: 0;
    text-align: center;
  }
  footer .center {
    width: 1.6rem;
    display: inline-block;
    height: 100%;
  }
  footer .iconfont {
    margin-right: .2rem;
  }
  footer span {
    font-size: .346667rem;
  }
</style>
