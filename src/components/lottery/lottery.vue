<template>
  <div class="game">
    <div class="change">&nbsp;&nbsp;您还有&nbsp;<span id="myNum">{{num}}</span>&nbsp;次机会开启礼盒&nbsp;&nbsp;</div>
    <img src="http://pic.ghs.net/public/images/79/3a/0b/30bb221750b8dc1cc91edd043cb7aa0dfce590c9.jpg"/>
    <div class="game_btn" :class="{'game_no':this.num===0}" @click="lottery">点我打开礼盒</div>
    <!-- <a class="rules" href="/">活动规则&nbsp;&gt;&gt;</a> -->
    <Gift :gift="myGift" :num="num"></Gift>
  </div>
</template>

<script type="text/ecmascript-6">
import {getRandom} from 'common/js/random.js';
import Gift from 'components/gift/gift';

const ERR_NO = 0;

export default {
  name: 'hello',
  data() {
    return {
      num: 0,
      giftList: [],
      myGift: {}
    };
  },
  created() {
    this.$http.get('./api/num.json').then((reponse) => {
      reponse = reponse.body;
      if (reponse.errno === ERR_NO) {
        this.num = reponse.data.num;
        // 假数据需要，请求礼品奖项
        if (this.num) {
          this.$http.get('./api/gift.json').then((reponse) => {
            reponse = reponse.body;
            if (reponse.errno === ERR_NO) {
              this.giftList = reponse.data;
            }
          });
        }
      }
    });
  },
  methods: {
    lottery() {
      if (this.num) {
        // 次数减少
        this.num--;
        // 假数据，出现一个随机数
        this.myGift = this.giftList[getRandom(0, 7)];
        console.log(this.myGift);
      }
    }
  },
  components: {
    Gift
  }
};
</script>

<style>
.game {
  background-color: #ff3b5b;
}

.game .change {
  width: 10rem;
  height: 1.49333rem;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  line-height: 1.49333rem;
}

[data-dpr="2"] .game .change {
  font-size: 36px;
}

[data-dpr="3"] .game .change {
  font-size: 54px;
}

.game .change:before {
  content: '';
  display: inline-block;
  width: 0.61333rem;
  height: 0.29333rem;
  background: url("http://pic.ghs.net/public/images/ab/34/10/93c69001e38941ac0b1c39435bb72c997b6af096.png") no-repeat;
  background-size: 100% 100%;
}

.game .change:after {
  content: '';
  display: inline-block;
  width: 0.61333rem;
  height: 0.29333rem;
  background: url("http://pic.ghs.net/public/images/0d/79/0f/74fd73e1d30f4644daaedfd3b999d8fa1344aaf4.png") no-repeat;
  background-size: 100% 100%;
}

.game .change > span {
  color: #fff32d;
}

.game > img {
  width: 10rem;
}

.game .game_btn {
  width: 6.42667rem;
  height: 1.06667rem;
  -moz-border-radius: 0.53333rem;
  -webkit-border-radius: 0.53333rem;
  border-radius: 0.53333rem;
  margin: 0.29333rem auto;
  background-color: #ffffff;
  font-size: 18px;
  text-align: center;
  color: #ff5a5a;
  line-height: 1.06667rem;
}

[data-dpr="2"] .game .game_btn {
  font-size: 36px;
}

[data-dpr="3"] .game .game_btn {
  font-size: 54px;
}

.game .game_no{
  background-color: #999999;
  color: #ffffff;
}

.game .rules {
  display: block;
  height: 1.06667rem;
  margin-right: 0.4rem;
  font-size: 14px;
  text-align: right;
  color: #ffffff;
  text-decoration: underline;
  line-height: 1.06667rem;
}

[data-dpr="2"] .game .rules {
  font-size: 28px;
}

[data-dpr="3"] .game .rules {
  font-size: 42px;
}

</style>
