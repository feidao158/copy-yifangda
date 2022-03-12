<template>
	<view>
		<view class="logo">
			<image src="../../static/logo.png"></image>
		</view>

		<view class="input-list">
			<view class="input-item">
				<view class="label">
					账号
				</view>
				<view class="action">
					<input type="text" placeholder="请输入手机号码">
				</view>
			</view>

			<view class="input-item">
				<view class="label">
					密码
				</view>
				<view class="action">
					<input type="text" placeholder="请输入登录密码">
				</view>
			</view>
		</view>


		<view class="footer-action">
			<jj-btn name="登录"></jj-btn>
		</view>

	</view>
</template>

<script>
	import mainBtn from '../../components/jj-btn.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			'jj-btn': mainBtn
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #f1f1f1;
	}

	.logo {
		display: flex;
		justify-content: center;
		margin-top: 160rpx;

		image {
			width: 400rpx;
			height: 200rpx;
		}
	}

	.input-list {
		margin-top: 20rpx;

		.input-item {
			border-bottom: 1rpx solid #C0C0C0;
			display: flex;
			background-color: #fff;
			padding: 20rpx 40rpx;

			.label {
				flex: 2;
			}

			.action {
				flex: 10;
			}
		}
	}
	
	.footer-action {
		display: flex;
		justify-content: center;
		margin-top: 40rpx;
	}
</style>
