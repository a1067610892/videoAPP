<template>
  <div class="login">
    <span @click="Return" class="iconfont return">&#xe604;</span>
    <h1 class="title">欢迎来到豆瓣</h1>
    <input @focus="hide" @blur="show" class="text" type="text" placeholder="手机号">
    <input @focus="hide" @blur="show" class="password" type="text" placeholder="密码">
    <button class="btn">登录</button>
    <div class="register">
      <span class="one active">注册豆瓣</span>
      <span class="two">|</span>
      <span class="one">忘记密码</span>
    </div>
    <footer class="footerbottom" ref='bottom'>
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
      /* 解决移动端小键盘导致定位出错 */
      number: 0
    }
  },
  mounted () { },
  methods: {
    Return () {
      this.$router.push({name: 'My', path: '/My'})
    },
    /* 解决移动端小键盘 */
    hide () {
      this.$refs.bottom.style.position = 'static'
    },
    show () {
      this.$refs.bottom.style.position = 'absolute'
    }
  }
}
</script>

<style scoped>
  .login {
    width: 10rem;
    margin: 0 auto;
    height: 100%;
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
  .footerbottom {
    width: 10rem;
    height: 1.066667rem;
    line-height: 1.066667rem;
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
  }
  .footerbottom .center {
    width: 1.6rem;
    display: inline-block;
    height: 100%;
  }
  .footerbottom .iconfont {
    margin-right: .2rem;
  }
  .footerbottom span {
    font-size: .346667rem;
  }
</style>
