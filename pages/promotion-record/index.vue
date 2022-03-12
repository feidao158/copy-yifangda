<template>
	<view>
		<view class="table">
			<view class="table-title">
				<view class="table-column">时间</view>
				<view class="table-column">UID</view>
				<view class="table-column">充值总额</view>
				<view class="table-column">提现总额</view>
			</view>
			
			<view class="table-content" v-for="item in 6">
				
				<view class="table-column">2022.02.22</view>
					<view class="table-column">1366</view>
					<view class="table-column">yyds</view>
					<view class="table-column">yyds</view>
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
