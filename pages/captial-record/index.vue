<template>

  <view>
    <view class="card-list">
      <view class="card-item" v-for="(item,index) in dataList" :key="index">
          <view class="info-item">
            <view class="label">时间</view>
            <view class="value">{{item.createTime}}</view>
          </view>

        <view class="info-item">
          <view class="label">金额</view>
          <view class="value">{{item.useMoney}}</view>
        </view>

        <view class="info-item">
          <view class="label">摘要</view>
          <view class="value">{{item.content}}</view>
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
	import {queryMoneyFlow} from "../../config/api";
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
		    queryMoneyFlow(this.queryParams)
		      .then(res=>{
		        this.dataList = res.data.list
		      })
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



	//.table {
	//	margin-top: 20rpx;
	//	.table-title {
	//		display: flex;
	//		text-align: center;
	//		font-weight: bold;
	//		border-bottom: 1rpx solid #808080;
	//		box-sizing: border-box;
	//		padding: 10rpx 0;
	//		.table-column {
	//			flex: 1
	//		}
	//	}
  //
	//	.table-content {
	//		border-bottom: 1rpx solid #808080;
	//		display: flex;
	//		text-align: center;
	//		box-sizing: border-box;
	//		padding: 10rpx 0;
	//		.table-column {
	//			flex: 1
	//		}
	//	}
	//}
</style>
