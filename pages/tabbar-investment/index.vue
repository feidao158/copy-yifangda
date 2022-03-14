<template>
	<view>
		<view class="banner-header">
			<image src="http://m.yifangfu.com/lib/icon_sercuity_bg.jpg"></image>
		</view>

		<view class="card-list">
			<view class="card-item" v-for="item in 2" @click="openDetail">
				<view class="icon">
					<image src="http://m.yifangfu.com/lib/vipzx2.png"></image>
				</view>


				<view class="title-info">
					<view class="main-title">会员专享</view>
					<view class="sub-title">地区代理尊享体验</view>
				</view>
			</view>
		</view>

		<scroll-view scroll-x="true" class="activity-list">
			<view class="activity-item" v-for="item in 3">
				<image src="http://m.yifangfu.com/lib/list23.jpg"></image>
			</view>
		</scroll-view>



	</view>
</template>

<script>
	export default {
		data() {
      return {

      }
    },
    methods: {
      openDetail() {
        uni.navigateTo({
          url: '/pages/project-investment/index'
        })
      }
    }
	}
</script>

<style lang="scss" scoped>
	page {

	}
	.banner-header {
		width: 100%;
		height: 320rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}

	.card-list {
		background-color: #ddd;
		.card-item {
			background-color: #fff;
			height: 180rpx;
			margin-top: 20rpx;
			align-items: center;
			box-sizing: border-box;
			padding: 40rpx;
			display: flex;
			.icon {
				width: 100rpx;
				height: 100rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.title-info {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				height: 100%;
				margin-left: 32rpx;

				.main-title {
					letter-spacing: 4rpx;
					color: red;
					font-weight: bold;
					font-size: 32rpx;
				}
				.sub-title {
					color: #909399;
					letter-spacing: 4rpx;
				}

			}
		}
	}

	.activity-list {


		background-color: #ddd;
		box-sizing: border-box;
		padding: 20rpx;
		padding-left: 0rpx;
		margin-top: 20rpx;
		white-space: nowrap;
		.activity-item {
			margin-left: 20rpx;
			display: inline-block;
			width: 600rpx;
			height: 220rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
