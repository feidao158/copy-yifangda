<template>
	<view class="withdrawal-page">
		<view class="info-list">
			<view class="select-action">
				<view class="label">
					提现方式
				</view>

				<view class="action" @click="show=true">
					<u-picker :show="show" :columns="columns" @confirm="show=false"></u-picker>
					<view class="action-input">
						支付宝(18660403850)
					</view>
					<view class="action-icon">
						<u-icon name="arrow-down"></u-icon>

					</view>
				</view>
			</view>
			<!-- select-action end -->

			<view class="input-action">
				<view class="label">提现金额</view>
				<view class="action">
					<view class="action-icon">
						￥
					</view>

					<view class="action-input">
						<input type="number" placeholder="0.00">
					</view>
				</view>

				<view class="desc">
					可提现金额：443.22
				</view>

			</view>


			<view class="input-action-password">
				<view class="label">
					交易密码
				</view>
				
				<view class="input-action">
					<input type="text">
				</view>
				
			</view>

			<view class="button">
				<u-button type="primary" text="确认提现"></u-button>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				columns: [
					['中国', '美国', '日本']
				],
			}
		}
	}
</script>

<style lang="scss" scoped>
	.withdrawal-page {
		.info-list {
			padding-top: 10rpx;

			.select-action {
				font-size: 32rpx;
				display: flex;
				box-sizing: border-box;
				padding: 20rpx;
				border-bottom: 1rpx solid #808080;

				.label {}

				.action {

					margin-left: 20rpx;
					display: flex;

					align-items: center;

					.action-input {
						font-weight: 500;
					}

					.action-icon {
						margin-left: 160rpx;
					}
				}
			}

			.input-action {
				border-bottom: 1rpx solid #808080;
				font-size: 32rpx;
				padding: 20rpx;

				.label {}

				.action {
					margin-top: 20rpx;
					display: flex;
					align-items: center;

					.action-icon {
						font-size: 48rpx;
						color: red;
					}

					.action-input {
						input {
							font-size: 36rpx;
						}
					}
				}
			}


			.input-action-password {
				padding: 20rpx;
				border-bottom: 1rpx solid #ddd;
				display: flex;
				align-items: center;
				width: 100%;
				.input-action {
					
				}
				
			}
		}
		.button {
			margin: 36rpx 20rpx 0 20rpx;
		}
	}
</style>
