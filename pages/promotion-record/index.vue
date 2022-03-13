<template>
  <view>
    <view class="table">
      <view class="table-title">
        <view class="table-column">时间</view>
        <view class="table-column">UID</view>
        <view class="table-column">充值总额</view>
        <view class="table-column">提现总额</view>
      </view>

      <view class="table-content" v-for="(item,index) in dataList" :key="index">

        <view class="table-column">{{item.createTime}}</view>
        <view class="table-column">{{item.userId}}</view>
        <view class="table-column">{{item.rechargeMoney}}</view>
        <view class="table-column">yyds</view>
      </view>

      <view style="margin-top: 40rpx" v-if="dataList.length==0">
        <u-empty
            mode="data"
            icon="http://cdn.uviewui.com/uview/empty/car.png"
        >
        </u-empty>
      </view>

    </view>
  </view>
</template>

<script>
import {queryExtensionRecord} from "../../config/api";

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
      queryExtensionRecord(this.queryParams)
        .then(res=>{
          this.dataList = this.dataList.concat(res.data.list)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  margin-top: 20 rpx;

  .table-title {
    display: flex;
    text-align: center;
    font-weight: bold;
    border-bottom: 1 rpx solid #808080;
    box-sizing: border-box;
    padding: 10 rpx 0;

    .table-column {
      flex: 1
    }
  }

  .table-content {
    border-bottom: 1 rpx solid #808080;
    display: flex;
    text-align: center;
    box-sizing: border-box;
    padding: 10 rpx 0;

    .table-column {
      flex: 1
    }
  }
}
</style>
