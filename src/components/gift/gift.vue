<template>
  <div>
    <transition-group name="drop" tag="div">
      <div :key="0" class="dialog" id="dialogGoods" v-show="isObject">
        <div class="dialog_overlay" @click="isObject=!isObject"></div>
        <div class="dialog_content">
          <div class="header"></div>
          <div class="title">获得{{gift.name}}</div>
          <img class="goods_img" :src="gift.image" />
          <div class="tips">客服人员会在3-5个工作日内与您联系，请保持手机畅通。</div>
          <a class="dialog_close know" href="javascript:void(0)" @click="isObject=!isObject">本宫知道了</a>
        </div>
      </div>
      <div :key="1" class="dialog" id="dialogLijin" v-show="isCashGift">
        <div class="dialog_overlay" @click="isCashGift=!isCashGift"></div>
        <div class="dialog_content">
          <div class="header"></div>
          <div class="title">获得<span class="ljnum">{{gift.name}}</span>元无门槛礼金券</div>
          <div class="lijin">
            <div class="lj_content">
              <span class="lj_icon">￥</span>
              <span class="ljnum">{{gift.name}}</span>
            </div>
            <div class="lj_tips">
              <p class="lj_tips_title">女王专属礼金券</p>
              <p>全场无限额可用</p>
            </div>
            <div class="lj_time">活动时间：3月4日-3月8日</div>
          </div>
          <div class="tips">恭喜您获得<span class="ljnum"></span>元礼金券，请在“我的”-“礼金券”中查看</div>
          <a class="dialog_close know" id="know" href="javascript:void(0)"  @click="isCashGift=!isCashGift">本宫知道了</a>
        </div>
        </div>
        <div :key="3" class="dialog" id="dialogError" v-show="isError">
        <div class="dialog_overlay" @click="isError=!isError"></div>
        <div class="dialog_content">
          <div class="icon"></div>
          <div class="tips">不好！<br/>礼物被江洋大盗偷走了！</div>
          <a class="dialog_close know" id="know" href="javascript:void(0)" @click="isError=!isError">本宫知道了</a>
        </div>
        </div>
    </transition-group>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'gift',
  data() {
    return {
      isObject: false,
      isCashGift: false,
      isError: false
    };
  },
  props: {
    gift: {
      type: Object
    },
    num: {
      type: Number
    }
  },
  created() {
  },
  watch: {
    num(val, oldVal) {
      // console.log('new: %s, old: %s', val, oldVal);
      this.isObject = this.gift.isObject;
      this.isCashGift = this.gift.isCashGift;
      this.isError = this.gift.isError;
    }
  },
  methods: {
  }
};
</script>

<style>
.overhide {
  height: 100%;
  overflow-y: hidden;
}

.dialog {
  position: fixed;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  z-index: 99;
  overflow: hidden;
  /*display: none;*/
}

.dialog_overlay {
  position: absolute;
  top: 0rem;
  right: 0rem;
  bottom: 0rem;
  left: 0rem;
  filter: alpha(opacity=60);
  -moz-opacity: 0.6;
  -khtml-opacity: 0.6;
  opacity: 0.6;
  background: #000000 none repeat scroll 0 0;
}

.dialog_content {
  width: 7.46667rem;
  height: 8.53333rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -3.86667rem 0 0 -3.73333rem;
  -moz-border-radius: 0.2rem;
  -webkit-border-radius: 0.2rem;
  border-radius: 0.2rem;
  background-color: #ffffff;
  /*animation: mydrop 0.3s ease-out 1;
  -webkit-animation: mydrop 0.3s ease-out 1;
  -moz-animation: mydrop 0.3s ease-out 1;
  -ms-animation: mydrop 0.3s ease-out 1;
  -o-animation: mydrop 0.3s ease-out 1;*/
  transition: all 2s ease-out;
  transform: translate3d(0, 0, 0);
}
.drop-enter,.drop-leave-active{
  transform: translate3d(0, -600px, 0);
}

.dialog_content .know {
  display: block;
  width: 6.26667rem;
  height: 1.06667rem;
  -moz-border-radius: 0.53333rem;
  -webkit-border-radius: 0.53333rem;
  border-radius: 0.53333rem;
  background-color: #ff5a5a;
  position: absolute;
  bottom: 0.45333rem;
  left: 0.6rem;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  line-height: 1.06667rem;
}

[data-dpr="2"] .dialog_content .know {
  font-size: 36px;
}

[data-dpr="3"] .dialog_content .know {
  font-size: 54px;
}

.dialog_content .header {
  width: 5.26667rem;
  height: 2.13333rem;
  position: absolute;
  top: -1.53333rem;
  right: 1.09333rem;
}

.dialog_content .tips {
  margin-top: 0.48rem;
  padding: 0 0.66667rem;
  font-size: 0.4rem;
  line-height: 0.64rem;
  text-align: justify;
  color: #333333;
}

.dialog_content .title {
  width: 7.46667rem;
  height: 0.48rem;
  padding: 0.98667rem 0 0.22667rem;
  font-size: 0.37333rem;
  line-height: 0.48rem;
  text-align: center;
  color: #ff5a5a;
}

.ani_scale {
  animation: myscale 0.3s linear 1;
  -webkit-animation: myscale 0.3s linear 1;
  -moz-animation: myscale 0.3s linear 1;
  -ms-animation: myscale 0.3s linear 1;
  -o-animation: myscale 0.3s linear 1;
}
/*
@keyframes mydrop {
  0% {
    transform: translate3d(0, -600px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@-webkit-keyframes mydrop {
  0% {
    -webkit-transform: translate3d(0, -600px, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
  }
}
@-moz-keyframes mydrop {
  0% {
    -moz-transform: translate3d(0, -600px, 0);
  }
  100% {
    -moz-transform: translate3d(0, 0, 0);
  }
}
@-o-keyframes mydrop {
  0% {
    -o-transform: translate3d(0, -600px, 0);
  }
  100% {
    -o-transform: translate3d(0, 0, 0);
  }
}
@-ms-keyframes mydrop {
  0% {
    -ms-transform: translate3d(0, -600px, 0);
  }
  100% {
    -ms-transform: translate3d(0, 0, 0);
  }
}*/
@keyframes myscale {
  0% {
    transform: scale3d(1, 1, 0);
  }
  50% {
    transform: scale3d(0.9, 0.9, 0);
  }
  100% {
    transform: scale3d(1, 1, 0);
  }
}
@-webkit-keyframes myscale {
    0% {
    -webkit-transform:  scale3d(1, 1, 0);
  }
  50% {
    -webkit-transform:  scale3d(0.9, 0.9, 0);
  }
  100% {
    -webkit-transform:  scale3d(1, 1, 0);
  }
}
@-moz-keyframes myscale {
    0% {
    -moz-transform:  scale3d(1, 1, 0);
  }
  50% {
    -moz-transform:  scale3d(0.9, 0.9, 0);
  }
  100% {
    -moz-transform:  scale3d(1, 1, 0);
  }
}
@-o-keyframes myscale {
    0% {
    -o-transform:  scale3d(1, 1, 0);
  }
  50% {
    -o-transform:  scale3d(0.9, 0.9, 0);
  }
  100% {
    -o-transform:  scale3d(1, 1, 0);
  }
}
@-ms-keyframes myscale {
    0% {
    -ms-transform:  scale3d(1, 1, 0);
  }
  50% {
    -ms-transform:  scale3d(0.9, 0.9, 0);
  }
  100% {
    -ms-transform:  scale3d(1, 1, 0);
  }
}

#dialogGoods .header {
  background: url("http://pic.ghs.net/public/images/d2/37/c0/44cfe21598ea3a31da2af503ef933d857d5c947a.png") no-repeat;
  background-size: 100% 100%;
}

#dialogGoods .goods_img {
  display: block;
  width: 3.33333rem;
  height: 3.33333rem;
  margin: 0 auto;
}

#dialogLijin .header {
  background: url("http://pic.ghs.net/public/images/d2/37/c0/44cfe21598ea3a31da2af503ef933d857d5c947a.png") no-repeat;
  background-size: 100% 100%;
}

#dialogLijin .lijin {
  width: 6.44rem;
  height: 2.8rem;
  margin: 0.26667rem auto;
  padding: 0.42667rem 0 0 0.77333rem;
  box-sizing: border-box;
  background: url("http://pic.ghs.net/public/images/7c/11/cd/68b561b4a66141c9fc82c439c74d1d81c57c2c73.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}

#dialogLijin .lijin .lj_content {
  position: relative;
  font-size: 0.96rem;
}

#dialogLijin .lijin .lj_content .lj_icon {
  display: inline-block;
  position: absolute;
  top: 0.06667rem;
  left: 0;
  font-size: 0.4rem;
}

#dialogLijin .lijin .lj_content .ljnum {
  display: inline-block;
  height: 0.93333rem;
  line-height: 0.93333rem;
  position: absolute;
  top: 0.06667rem;
  margin-left: 0.49333rem;
}

#dialogLijin .lijin .lj_tips {
  float: right;
  margin-right: 0.74667rem;
  font-size: 0.37333rem;
  line-height: 0.53333rem;
  color: #333333;
}

#dialogLijin .lijin .lj_tips .lj_tips_title {
  color: #ff5a5a;
}

#dialogLijin .lijin .lj_time {
  width: 5.46667rem;
  height: 0.74667rem;
  position: absolute;
  bottom: 0rem;
  left: 0.77333rem;
  font-size: 0.32rem;
  line-height: 0.74667rem;
  text-align: left;
  color: #333333;
}

#dialogError .icon {
  width: 1.6rem;
  height: 1.6rem;
  margin: 1.68rem auto 0.90667rem;
  background: url("http://pic.ghs.net/public/images/b2/76/87/a2c6fe9cfac23e67f646cd57605ce987f8f5d4de.png") no-repeat;
  background-size: 100% 100%;
}

#dialogError .tips {
  text-align: center;
  font-size: 0.48rem;
  line-height: 0.70667rem;
}
</style>
