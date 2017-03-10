<template>
  <div class="goods">
    <img src="http://pic.ghs.net/public/images/21/b2/9b/6b2aded77796ab3556988ddce4e163ba3484c212.jpg" />
    <div class="goods_title">&nbsp;&nbsp;凑单好货&nbsp;&nbsp;</div>
    <div class="guaCoupons">
    <ul class="guaCoupons_minus">
      <li v-for="item in goods">
        <a :href="item.link">
          <img :src="item.image" />
          <div class="goodsInfo">
            <div class="goodsName"></div>
            <div class="qprice">女王价:<span class="qprice-sign">￥</span><span class="qprice-content">{{item.salePrice}}</span></div>
            <div class="goodsprice">聚鲨价:￥{{item.price}}</div>
            <div class="m-buy-now">立即抢购</div>
          </div>
        </a>
      </li>
    </ul>
    </div>
    <div class="return_top" id="topBtn" @click="goTop">返回顶部</div>
  </div>
</template>

<script type="text/ecmascript-6">
const ERR_NO = 0;
export default {
  name: 'goods',
  data() {
    return {
      goods: []
    };
  },
  created() {
    this.$http.get('./api/goods.json').then((reponse) => {
      reponse = reponse.body;
      if (reponse.errno === ERR_NO) {
        this.goods = reponse.data;
      }
    });
  },
  methods: {
    goTop() {
      document.body.scrollTop = 0;
    }
  }
};
</script>

<style>
.goods {
  background-color: #ffdf31;
  padding-bottom: 0.01333rem;
}

.goods > img {
  width: 10rem;
  height: 0.68rem;
  position: relative;
  top: -2px;
}

.goods .goods_title {
  width: 10rem;
  height: 0.77333rem;
  margin: 0.58667rem 0;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-align: center;
  color: #ffffff;
  line-height: 0.77333rem;
}

[data-dpr="2"] .goods .goods_title {
  font-size: 36px;
}

[data-dpr="3"] .goods .goods_title {
  font-size: 54px;
}

.goods .goods_title:before {
  content: '';
  display: inline-block;
  width: 0.61333rem;
  height: 0.29333rem;
  background: url("http://pic.ghs.net/public/images/ab/34/10/93c69001e38941ac0b1c39435bb72c997b6af096.png") no-repeat;
  background-size: 100% 100%;
}

.goods .goods_title:after {
  content: '';
  display: inline-block;
  width: 0.61333rem;
  height: 0.29333rem;
  background: url("http://pic.ghs.net/public/images/0d/79/0f/74fd73e1d30f4644daaedfd3b999d8fa1344aaf4.png") no-repeat;
  background-size: 100% 100%;
}

.goods .return_top {
  width: 9.49333rem;
  height: 1.62667rem;
  margin: 1.0rem auto 1.0rem;
  -moz-border-radius: 1.62667rem;
  -webkit-border-radius: 1.62667rem;
  border-radius: 1.62667rem;
  background-color: #ffffff;
  font-size: 24px;
  text-align: center;
  color: #ff5a5a;
  line-height: 1.62667rem;
}

[data-dpr="2"] .goods .return_top {
  font-size: 48px;
}

[data-dpr="3"] .goods .return_top {
  font-size: 72px;
}
    .guaCoupons {
        overflow: hidden;
        width: 10rem;
    }
    
    .guaCoupons_minus img {
        width: 4.72rem;
        height: 4.72rem;
    }
    
    .guaCoupons_minus {
        padding-left: 0.267rem;
        font-size: 0
    }
    
    .guaCoupons_minus li {
        display: inline-block;
        overflow: hidden;
        margin: 0 2px 2px 0;
        width: 4.72rem;
        background: #fff;
        vertical-align: top;
        position: relative;
    }
    
    .goodsInfo {
        width: 4.72rem;
        box-sizing: border-box;
        padding: 0 0.28rem 0 0.28rem;
    }
    
    .goodsName {
        overflow: hidden;
        width: 4.267rem;
        height: 24px;
        color: #333;
        text-align: left;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        line-height: 24px
    }
    
    [data-dpr="2"] .goodsName {
        height: 48px;
        font-size: 26px;
        line-height: 48px
    }
    
    [data-dpr="3"] .goodsName {
        height: 72px;
        font-size: 39px;
        line-height: 72px
    }
    
    .goodsprice {
        width: 4.267rem;
        height: 17px;
        font-size: 12px;
        line-height: 17px;
        color: #999;
        text-align: left;
        text-decoration: line-through;
    }
    
    .qprice {
        width: 4.187rem;
        height: 20px;
        background-size: 1.253rem 0.307rem;
        font-size: 12px;
        line-height: 20px;
        color: #fe3b5b;
        text-align: left;
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flexbox;
        display: flex;
    }
    
    [data-dpr="2"] .qprice {
        height: 40px;
        font-size: 24px;
        line-height: 40px
    }
    
    [data-dpr="3"] .qprice {
        height: 60px;
        font-size: 36px;
        line-height: 60px
    }
    
    .qprice-sign {
        font-size: 14px;
    }
    
    [data-dpr="2"] .qprice-sign {
        font-size: 26px;
    }
    
    [data-dpr="3"] .qprice-sign {
        font-size: 40px;
    }
    
    .qprice-content {
        font-size: 16px;
    }
    
    [data-dpr="2"] .qprice-content {
        font-size: 30px;
    }
    
    [data-dpr="3"] .qprice-content {
        font-size: 46px;
    }
    
    [data-dpr="2"] .goodsprice {
        height: 34px;
        font-size: 24px;
        line-height: 34px
    }
    
    [data-dpr="3"] .goodsprice {
        height: 51px;
        font-size: 36px;
        line-height: 51px
    }
    
    .m-buy-now {
        margin: 0.133rem 0 0.267rem;
        width: 4.187rem;
        height: 0.72rem;
        background: #fe3b5b;
        border-radius: 2px;
        line-height: 0.72rem;
        font-size: 0.4rem;
        text-align: center;
        color: #ffffff;
    }

</style>
