<template>

  <view>
    <view class="card-list">
      <view class="card-item" v-for="(item,index) in dataList" :key="index">

        <view class="info-item">
          <view class="label">时间</view>
          <view class="value">{{item.createTime}}</view>
        </view>

        <view class="info-item">
          <view class="label">项目名称</view>
          <view class="value">{{item.projectName}}</view>
        </view>

        <view class="info-item">
          <view class="label">投资金额</view>
          <view class="value">{{item.money}}</view>
        </view>

        <view class="info-item">
          <view class="label">状态</view>
          <view class="value">{{item.stateSn}}</view>
        </view>


      </view>
    </view>

    <view style="display: flex;justify-content: center;margin-top: 100rpx;" v-if="dataList.length==0">
      <u-empty
          mode="data"

      >
      </u-empty>
    </view>


  </view>
</template>

<script>
import {queryInvestmentRecord} from "../../config/api";

export default {
  data() {
    return {
      queryParams: {
        pageNumber: 1,
        pageSize: 20
      },
      dataList: []
    }
  },
  methods: {
    queryDataList() {
      queryInvestmentRecord(this.queryParams)
        .then(res=>{
          this.dataList = res.data.list
        })
    }
  },
  onLoad() {
    this.queryDataList()
  },
  onShow(){
    this.queryDataList()
  }
}
</script>

<style lang="scss" scoped>


.card-list {
  padding: 0 20rpx;
  .card-item {
    margin-top: 40rpx;
    font-size: 12rpx;
    background-image: url("/static/img_7.png");
    background-size: 100% 100%;
    border-radius: 20rpx;
    padding: 10rpx;
    color: #fff;
    .info-item {
      display: flex;
      justify-content: space-between;
      padding: 10rpx;
    }

  }
}


</style>
