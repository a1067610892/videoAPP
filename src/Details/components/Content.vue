<template>
  <div>
    <div class="content border_bottom">
      <div class="content-left">
        <h1>{{list.title}}</h1>
        <div class="type">
          <span>{{list.year}}</span><span> / </span>
          <span v-for="(item, index) in list.genres" :key="index">{{item}}<span v-if="(index + 1) !== list.genres.length"> / </span></span>
        </div>
        <div class="type">
          <span>原名：</span><span>{{list.original_title}}</span>
        </div>
        <div class="type">
          <span>上映时间：</span><span>{{list.pubdates[0]}}</span>
        </div>
        <div class="type">
          <span>片长：</span><span>{{list.durations[0]}}</span>
        </div>
      </div>
      <div class="content-right">
        <div class="box">
          <h2>豆瓣评分</h2>
          <span class="Fraction">{{list.rating.average === 0 ? '暂无评分' : list.rating.average}}<span class="Fraction" v-if="
          list.rating.average === 1
          || list.rating.average === 2
          || list.rating.average === 3
          || list.rating.average === 4
          || list.rating.average === 5
          || list.rating.average === 6
          || list.rating.average === 7
          || list.rating.average === 8
          || list.rating.average === 9">.0</span></span>
          <span class="count">{{list.ratings_count}}人</span>
        </div>
      </div>
    </div>
    <div class="footer border_bottom">
      <h3>简介</h3>
      <p :class="{Receive: Receivetrue == true, height: Receivetrue == true}">{{list.summary}}</p>
      <span style="color:#179717" v-if="list.summary.length > 84" @click="hide" class="unfold">{{unfold}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Object
  },
  name: 'DetailsContent',
  data () {
    return {
      unfold: '展开',
      Receivetrue: true
    }
  },
  methods: {
    hide () {
      if (this.Receivetrue) {
        this.unfold = '收起'
        this.Receivetrue = false
      } else {
        this.unfold = '展开'
        this.Receivetrue = true
      }
    }
  }
}
</script>

<style scoped>
  .border_bottom::before {
    border-color: #666;
  }
  .content {
    width: 9rem;
    margin: 0 auto;
    height: 4.666667rem;
    padding: .533333rem 0.5rem 0 0.5rem;
    background: #eee;
  }
  .content .content-left {
    width: 6rem;
    float: left;
    height: 100%;
  }
  .content .content-left .type {
    width: 100%;
    height: .666667rem;
    line-height: .666667rem;
    color: #999;
    font-size: .32rem;
  }
  .content .content-left h1 {
    font-size: .586667rem;
    line-height: .8rem;
    height: 1.6rem;
  }
  .content .content-right {
    float: right;
    width: 3rem;
    height: 100%;
  }
  .content .content-right .box {
    width: 3rem;
    text-align: center;
    height: 2.666667rem;
    background: #FFF;
    box-shadow: -0.013333rem .133333rem .266667rem #ccc;
  }
  .content .content-right .box h2 {
    color: #ccc;
    height: .933333rem;
    line-height: .933333rem;
  }
  .content .content-right .box .Fraction {
    font-size: .506667rem;
    font-weight: bold;
    height: .866667rem;
    line-height: .866667rem;
  }
  .content .content-right .box .count {
    display: block;
    width: 100%;
    height: .866667rem;
    line-height: .866667rem;
  }
  .content .content-right .border::before {
    border-color: #999;
  }
  .footer {
    width: 9rem;
    padding: .266667rem 0.5rem;
    background: #eee;
  }
  .footer h3 {
    margin: .266667rem 0;
    font-size: .266667rem;
    color: #999;
  }
  .footer p {
    font-size: .32rem;
    line-height: .466667rem;
  }
  .footer .unfold {
    width: 100%;
    height: .666667rem;
    display: block;
    line-height: .666667rem;
    text-align: right;
    color: #999;
  }
  .height {
    height: 1.333333rem;
  }
  .Receive {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
</style>
