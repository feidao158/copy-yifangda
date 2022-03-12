<template>
	<view style="padding: 20rpx;">
		<view class="box-info">
			
			<view class="box-item">
				<view class="label">账户可用余额</view>
				<view class="value">220000.00</view>
			</view>
			
			<view class="box-item">
				<view class="label">账户可用余额</view>
				<view class="value">220000.00</view>
			</view>
		</view>
		
		<view class="input-list">
			
			<view class="input-item">
				<view class="label">
					起投金额
				</view>
				<view class="action">
					$ <text class="main-blue-color">1000</text> 元
				</view>
			</view>
			
			<view class="input-item">
				<view class="label">
					结息时间
				</view>
				<view class="action">
					满<text class="main-blue-color">24小时</text>自动结息
				</view>
			</view>
			
			
			<view class="input-item">
				<view class="label">
					投资金额
				</view>
				<view class="action">
					<input type="text" style="text-align: right;" placeholder="0.00">
				</view>
			</view>
			
			<view class="input-item">
				<view class="label">
					支付密码
				</view>
				<view class="action">
					<input type="text" style="text-align: right;" placeholder="请输入支付密码">
				</view>
			</view>
			
			
		</view>
		
		
		<view class="footer-action">
			<view class="btn">
				立即投资
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
	
	.main-blue-color {
		color: #0000ff;
	}
	
	.box-info {
		height: 160rpx;
		border-radius: 4rpx;
		padding: 20rpx 40rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		text-align: center;
		background-color: #3582b3;
		color: #fff;
		.box-item {
			flex: 1;
			.label {
				margin-top: 4rpx;
			}
			.value {
				margin-top: 20rpx;
			}
		}
	}
	
	.input-list {
		.input-item {
			display: flex;
			justify-content: space-between;
			padding: 20rpx;
			border-bottom: 1rpx solid #C0C0C0;
			font-weight: 500;
		}
	}
	
	.footer-action {
		display: flex;
		justify-content: center;
		
		
		.btn {
			background-color: #3582b3;
			color: #Fff;
			width: 620rpx;
			height: 72rpx;
			line-height: 72rpx;
			text-align: center;
			margin-top: 40rpx;
		}
	}
	
</style>
