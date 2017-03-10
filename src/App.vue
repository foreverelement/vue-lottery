<template>
  <div id="app">
    <div class="banner">
      <p class="subtitle">每天5台iPad&nbsp;air&nbsp;2,&nbsp;1000万礼金券!</p>
      <div class="share_btn">点击分享</div>
      <p class="tips">每天首次分享APP活动<br/>并返回APP即可参与礼盒抽奖</p>
    </div>
    <Lottery></Lottery>
    <Goods></Goods>
  </div>
</template>

<script>
import Lottery from './components/lottery/lottery';
import Goods from './components/goods/goods';

export default {
  name: 'app',
  components: {
    Lottery,
    Goods
  }
};
</script>

<style lang="less">
#app {
  position: relative;
  margin: 0 auto;
  width: 10rem;
  background-color: #ff3b5b;
}

.banner {
  width: 10rem;
  height: 6.48rem;
  background: url("http://pic.ghs.net/public/images/a9/95/6a/a49d08d74d5a147072ea651dda696e0db737f4f2.jpg") no-repeat;
  background-size: 100% 100%;
}

.banner>.subtitle {
  width: 10rem;
  height: 0.66667rem;
  padding-top: 2.72rem;
  font-size: 0.48rem;
  line-height: 0.66667rem;
  text-align: center;
  color: #ffffff;
}

.banner>.share_btn {
  width: 4.26667rem;
  height: 1.06667rem;
  -moz-border-radius: 0.53333rem;
  -webkit-border-radius: 0.53333rem;
  border-radius: 0.53333rem;
  margin: 0.13333rem auto;
  background-color: #ff3b5b;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  line-height: 1.06667rem;
}

[data-dpr="2"] .banner>.share_btn {
  font-size: 36px;
}

[data-dpr="3"] .banner>.share_btn {
  font-size: 54px;
}

.banner>.tips {
  width: 10rem;
  font-size: 0.37333rem;
  line-height: 0.50667rem;
  text-align: center;
  color: #ff3b5b;
}
</style>
