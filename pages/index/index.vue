<template>
	<view>
		<view class="swiper">
			<u-swiper :list="list1" @change="change" @click="click" height="600"></u-swiper>
		</view>

		<view class="notice">
			<u-notice-bar :text="text1"></u-notice-bar>
		</view>

		<view class="menu-list">

			<view class="menu-item" @click="menuClick(0)">
				<view class="icon">
					<image src="/static/03-基金.png"></image>
				</view>
				<view class="text">静态基金</view>
			</view>

      <view class="menu-item" @click="menuClick(1)">
        <view class="icon">
          <image src="/static/客服.png"></image>
        </view>
        <view class="text">在线客服</view>
      </view>

      <view class="menu-item" @click="menuClick(2)">
        <view class="icon">
          <image src="/static/风险查询.png"></image>
        </view>
        <view class="text">风险控制</view>
      </view>


		</view>

		<view class="main-content">
			<view class="sub-title">
				<view class="title">
					会员专享
				</view>
				<view class="action" @click="moreAction">
					更多>
				</view>
			</view>

			<view class="card-list">
				<view class="card-item" v-for="(item,index) in projectList" :key="index">
					<view class="param-list">

						<view class="param-item">
							<view class="value">
								<text class="data-info">{{item.investment_cycle}}</text>
								<text class="unit-info">天</text>
							</view>
							<view class="desc">
								投资期限
							</view>
						</view>

						<view class="param-item">
							<view class="value">
								<text class="data-info">{{item.proj_bonus_rate}}</text>
								<text class="unit-info">%</text>
							</view>
							<view class="desc">
								日化收益率
							</view>
						</view>

						<view class="param-item">
							<view class="value">
								<text class="data-info">{{parseInt(item.miniprofit)}}</text>
								<text class="unit-info">元</text>
							</view>
							<view class="desc">
								总收益
							</view>
						</view>

						<view class="param-item">
							<view class="value">
								<text class="data-info">{{parseInt(item.start_money)}}</text>
								<text class="unit-info">元</text>
							</view>
							<view class="desc">
								起购金额
							</view>
						</view>





					</view>

					<view style="display: flex;justify-content: center;margin-top: 60rpx;">
						<view class="btn" style="" @click="navigateDetail(item.id)">立即投资</view>
					</view>

				</view>
			</view>


		</view>

	</view>
</template>

<script>
	import {
		getProjectList
	} from "../../config/api";

	export default {
		data() {
			return {
				list1: [
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
				],
				text1: '投资充值请联系客服！投资充值请联系客服！投资充值请联系客服！',
				projectList: []
			}
		},
		onLoad() {
			this.getProjectList()

		},
		methods: {
			change() {
				console.log('swiper change...')
			},
			openDetail() {
				uni.navigateTo({
					url: '../investment-detail/index'
				})
			},
			getProjectList() {
				getProjectList().then(res => {
					this.projectList = res.data
				})
			},
			navigateDetail(id) {
				uni.navigateTo({
					url: `/pages/investment-detail/index?id=${id}`
				})
			},
      menuClick(index) {
        switch (index) {
          case 1:

            // window.location.href('https://chatlink-new.meiqia.cn/widget/standalone.html?eid=97f3296f3131f1f24d8055ffb8769587\n','_blank')
            uni.navigateTo({
              url: '/pages/chat/index'
            })
            console.log('11')
            break
        }
      },
      moreAction() {
        uni.navigateTo({
          url: '/pages/project-investment/index'
        })
      }
		}
	}
</script>

<style lang="scss" scoped>
	.swiper {
		z-index: 99;
	}

	.notice {
		// height: 100rpx;
		// line-height: 100rpx;
		// box-sizing: border-box;
		// padding: 0 20rpx;
		// font-size: 34rpx;
		// letter-spacing:4rpx;
		// border: 1px solid red;
		// border-radius: 40px;
		// margin: 0 40rpx;
		// border: 1px solid #ebebeb;
		// box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);

	}

	.menu-list {
		margin-top: 40rpx;
		display: flex;
		justify-content: space-around;

		.menu-item {
			display: flex;
			flex-direction: column;
			align-items: center;

			.icon {
				width: 160rpx;
				height: 160rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.text {
				margin-top: 8rpx;
				font-weight: 400;
			}
		}
	}

	.main-content {
		// border: 1rpx solid red;
		padding: 10rpx 40rpx;

		.sub-title {
			margin-top: 20rpx;
			font-weight: bold;
			font-size: 40rpx;
			display: flex;
			justify-content: space-between;

			.title {
				color: #303133;
			}

			.action {
				color: #909399;
			}
		}

		.card-list {
			margin-top: 40rpx;

			.card-item {
				border-radius: 20rpx;
				margin-top: 40rpx;
				border: 1px solid #ebebeb;
				box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
				height: 400rpx;

				.param-list {
					margin: 0 20rpx;
					margin-top: 80rpx;
					display: flex;
					justify-content: space-between;

					.param-item {
						display: flex;
						flex-direction: column;
						align-items: center;

						.value {
							color: #909399;

							.data-info {
								color: #409EFF;
							}

							.unit-info {
								font-size: 40rpx;
								margin-left: 10rpx;
							}
						}

						.desc {
							color: #909399;
							margin-top: 8rpx;
							font-size: 32rpx;
						}


					}
				}

				.btn {
					width: 600rpx;

					border-radius: 40rpx;
					height: 80rpx;
					line-height: 80rpx;
					text-align: center;
					font-size: 32rpx;
					color: #fff;
					background: linear-gradient(to right, #1b81ee, 68%, #1f23a8);
				}
			}
		}
	}
</style>
