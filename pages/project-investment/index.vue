<template>
  <view>
    <view class="card-list">
      <view class="card-item" v-for="item in 6">
        <view class="title">
          易方达中证全指家用电器指数A
        </view>

        <view class="info-list">
          <view class="info-item" v-for="item in 3">
            <view class="label">
              2.4%
            </view>
            <view class="value">
              日化利率
            </view>
          </view>
        </view>

        <view class="desc">
          项目规模：100000万元 每日返息，到期还本
        </view>


        <view class="action">
          <view class="bar">
            <u-line-progress :percentage="30" activeColor="#3582b3" height="26"></u-line-progress>

          </view>
          <view class="btn">
            <u-button text="立即投资" size="mini" type="primary"></u-button>

          </view>
        </view>




      </view>
    </view>
  </view>
</template>


<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
page {
  background-color: #f5f5f5;
}
.card-list {
  .card-item {
    background-color: #fff;
    font-size: 26rpx;
    padding: 20rpx;
    box-shadow: 0 0 8rpx 0 rgba(232,237,250,.6),0 2rpx 4rpx 0 rgba(232,237,250,.5);
    margin-top: 20rpx;
    .title {

      border-bottom: 1rpx solid #DCDFE6;
      padding-bottom: 10rpx;
    }

    .info-list {
      display: flex;
      justify-content: space-between;
      .info-item {
        margin-top: 20rpx;
        padding: 0 40rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        .value {
          margin-top: 14rpx;
        }
      }
    }

    .desc {
      margin-top: 20rpx;
    }

    .action {
      margin-top: 20rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bar {
        flex: 8;
      }
      .btn {
        flex: 2;
        display: flex;
        justify-content: center;
        padding: 0 20rpx;
      }
    }
  }
}
</style>
