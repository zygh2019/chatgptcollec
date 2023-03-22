<style lang="scss" scoped>
@import "../../style/them";

.list-conatainer-nav{
  margin-top: 36px;
  display: flex;
  padding-left: 32rpx;

  & > view{
    height: 48rpx;
    line-height: 48rpx;
    padding-left: 26rpx;
    padding-right: 26rpx;
    border-radius: 48rpx;
    color: #666;
    background: transparent;
    margin-right: 20rpx;

    &.active{
      color: #fff;
      background: $themColor;
    }
  }
}

.main {
  margin-top: 46rpx;
  .list {
    overflow: hidden;
    box-sizing: border-box;
    background-color: #ffffff;
    padding: 24rpx 32rpx;
    border-bottom: 1rpx solid #F4F4F4;
    .status {
      align-items: center;
      display: flex;
      > image {
        width: 16rpx;
        height: 16rpx;
      }
      > text {
        margin-left: 8rpx;
        font-size: 28rpx;
      }
    }
    .userInfo {
      color: #666666;
      font-size: 26rpx;
      text {
        margin-left: 12rpx;
      }
    }
    .type {
      margin-top: 24rpx;
      color: #333333;
      font-size: 28rpx;
      line-height: 40rpx;
      .money {
        color: #333333;
        font-weight: 500;
      }
    }
    .time {
      margin-top: 24rpx;
      font-size: 24rpx;
      color: #999999;
    }
  }
}

.empty-data{
  padding-top: 80rpx;
  padding-bottom: 100rpx;
  image{
    width: 340rpx;
    height: 318rpx;
    margin: 0 auto;
    display: block;
  }
}

</style>

<template>
  <view class="">
    <view class="list-conatainer-nav">
      <view class="active">全部</view>
      <view>待入帐</view>
      <view>已入帐</view>
    </view>

    <view class="main">
      <view class="empty-data">
        <image src="../../static/empty-data.png" mode="aspectFit"></image>
      </view>
      
      <view class="list u-flex-col u-row-between" v-for="n in 3">
        <view class="top u-flex u-row-between">
          <view class="userInfo u-flex">
            <u-image
                width="48rpx"
                height="48rpx"
                src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1743338427,2200622767&fm=26&gp=0.jpg"
                shape="circle"
            ></u-image>
            <text class="name">立秋的风</text>
          </view>
          <view class="status">
            <image class="circle" src="../../static/orangeCircle.png" mode=""></image>
            <text style="color: #FAA002;">待核销</text>
          </view>
          <view class="status u-flex" v-if="false">
            <image class="circle" src="../../static/greenCircle.png" mode=""></image>
            <text style="color: #44CDB6;">已核销</text>
          </view>
        </view>

        <view class="type u-flex u-row-between">
          <text>推广佣金</text>
          <text class="money">¥220</text>
        </view>
        <text class="time">推广时间：2020-08-12 18:26</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: '',
  data() {
    return {};
  },
  methods: {}
};
</script>