<template>
	<view style="padding: 20rpx;">
		<view class="banner">
			<image src="../../static/logo.png"></image>
		</view>
		
		<view class="title">易方达医疗保健行业混合</view>
		
		
		<view class="panel-info">
			<view class="panel-item" v-for="item in 3">
				<view class="label">
					项目规模
				</view>
				
				<view class="value">
					￥500万元
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
	.banner {
		width: 100%;
		height: 340rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	
	.title {
		margin-top: 20rpx;
		font-size: 28rpx;
		font-weight: 500;
	}
	
	.panel-info {
		border-top: 1rpx solid #C0C0C0;
		border-bottom: 1rpx solid #C0C0C0;
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 20rpx;
		.panel-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			.value {
				margin-top: 20rpx;
			}
		}
	}
	
	
</style>
