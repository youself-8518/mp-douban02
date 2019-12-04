<template>
  <div>
    <div class="swiperWrapper">
      <swiper indicator-dots autoplay circular>
        <swiper-item>
          <img src="/static/images/cover/0.jpg" alt />
        </swiper-item>
        <swiper-item>
          <img src="/static/images/cover/1.jpg" alt />
        </swiper-item>
        <swiper-item>
          <img src="/static/images/cover/2.jpg" alt />
        </swiper-item>
      </swiper>
    </div>

    <div class="bookList">
      <div class="listNav">
        <span>全部商品</span>
        <span class="more">></span>
      </div>
      <div class="list">
        <div class="bookItem">
          <img src="/static/images/cover/3.jpg" alt />
          <p>平凡的世界</p>
          <p>路遥</p>
        </div>
        <div class="bookItem">
          <img src="/static/images/cover/3.jpg" alt />
          <p>平凡的世界</p>
          <p>路遥</p>
        </div>
        <div class="bookItem">
          <img src="/static/images/cover/3.jpg" alt />
          <p>平凡的世界</p>
          <p>路遥</p>
        </div>
        <div class="bookItem">
          <img src="/static/images/cover/3.jpg" alt />
          <p>平凡的世界</p>
          <p>路遥</p>
        </div>
      </div>
      <button class="centerBtn" open-type="share">分享给好友</button>
    </div>
  </div>
</template>

<script>
export default {
  onShareAppMessage(e){
    console.log(e);
    return {
      title: "平凡的世界",
      path: "/pages/index/main",
      imageUrl: "/static/images/user.png"
    }
  },
  mounted(){
    wx.setNavigationBarTitle({ title: 'FristView' });
  }
};
</script>

<style scoped lang="less">
.swiperWrapper {
  swiper {
    width: 100%;
    height: 400rpx;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.bookList {
  .listNav {
    line-height: 80rpx;
    padding: 10rpx;
    .more {
      float: right;
    }
  }
}
.list {
  display: flex;
  flex-wrap: wrap;
  .bookItem {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1rpx solid #eee;
    box-sizing: border-box;
    &:nth-child(2n + 1) {
      border-right: 1rpx solid #eee;
    }
    img {
      width: 200rpx;
      height: 200rpx;
      margin: 10rpx 0;
    }
    p {
      font-size: 24rpx;
      line-height: 50rpx;
    }
  }
}
.centerBtn{
  width: 40%;
  margin: 20rpx auto;
}
</style>
