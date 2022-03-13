<template>
	<view>
		<view class="table">
			<view class="table-title">
				<view class="table-column">时间</view>
				<view class="table-column">项目名称</view>
				<view class="table-column">投资金额</view>
				<view class="table-column">期数</view>
				<view class="table-column">状态</view>
			</view>
			
			<view class="table-content" v-for="(item,index) in dataList">
				
				<view class="table-column">{{item.createTime}}</view>
					<view class="table-column"></view>
					<view class="table-column">{{item.money}}</view>
					<view class="table-column">{{item.dayNum}}</view>
					<view class="table-column">{{item.state}}</view>
				</view>	
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
	import {queryProfitLogqueryProfitLog} from "../../config/api";
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
		    queryProfitLogqueryProfitLog(this.queryParams)
		      .then(res=>{
		        this.dataList = this.dataList.concat(res.data.list)
		      })
		  } 
		},
		onLoad() { 
		  this.queryDataList()
		}
	}
</script>

<style lang="scss" scoped>
	.table {
		margin-top: 20rpx;
		.table-title {
			display: flex;
			text-align: center;
			font-weight: bold;
			border-bottom: 1rpx solid #808080;
			box-sizing: border-box;
			padding: 10rpx 0;
			.table-column {
				flex: 1
			}
		}	
		.table-content {
			border-bottom: 1rpx solid #808080;
			display: flex;
			text-align: center;
			box-sizing: border-box;
			padding: 10rpx 0;
			.table-column {
				flex: 1
			}
		}
	}
</style>
