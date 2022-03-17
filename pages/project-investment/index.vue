<template>
  <view>
    <view class="card-list">
      <view class="card-item" v-for="(item,index) in projectList" :key="index">
        <view class="title">
          {{item.name}}
        </view>

        <view class="info-list">

          <view class="info-item">
            <view class="label">
              {{item.proj_bonus_rate}}
            </view>
            <view class="value">
              日化利率
            </view>
          </view>

          <view class="info-item">
            <view class="label">
              {{item.start_money}}
            </view>
            <view class="value">
              起投金额
            </view>
          </view>

          <view class="info-item">
            <view class="label">
              {{item.investment_cycle}}天
            </view>
            <view class="value">
              投资周期
            </view>
          </view>


        </view>

        <view class="desc">
          项目规模：{{parseInt(item.scale)}}元 每日返息，到期还本
        </view>


        <view class="action">
          <view class="bar">
            <u-line-progress :percentage="item.process" activeColor="#3582b3" height="26"></u-line-progress>

          </view>
          <view class="btn">
            <u-button text="立即投资" size="mini" type="primary" @click="navigateInfo(item.id)"></u-button>

          </view>
        </view>




      </view>
    </view>
  </view>
</template>


<script>
import {getProjectList} from "../../config/api";

export default {
  data() {
    return {
      projectList: []
    }
  },
  methods: {
    getProjectList() {
      getProjectList().then(res=>{
        this.projectList = res.data
      })
    },
    navigateInfo(id) {
      uni.navigateTo({
        url: `/pages/investment-detail/index?id=${id}`
      })
    }
  },
  onLoad() {
    this.getProjectList()
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
