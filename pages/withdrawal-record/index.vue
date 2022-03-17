<template>
  <view>
    <view class="card-list">
      <view class="card-item" v-for="(item,index) in dataList" :key="index">
        <div class="info-item">
          <div class="label">
            创建时间
          </div>
          <div class="value">
            {{item.createTime}}
          </div>
        </div>

        <div class="info-item">
          <div class="label">
            提现金额
          </div>
          <div class="value">
            {{item.drawMoney}}
          </div>
        </div>

        <div class="info-item">
          <div class="label">
            提现状态
          </div>
          <div class="value">
            {{updateState(item.state)}}
          </div>
        </div>


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
import {queryWithDrawRecord} from "../../config/api";

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
      queryWithDrawRecord(this.queryParams)
        .then(res=>{
          this.dataList = res.data.list
        })
    },
    updateState(state) {
      switch (state) {
        case 1:
          return '提现中'
        case 2:
          return '提现成功'
        case 3:
          return '提现失败'
      }
    }
  },
  onLoad() {
    this.queryDataList()
  },
  onShow() {
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
