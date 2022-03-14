<template>
	<view>
    <u-toast ref="uToast"></u-toast>
		<view class="user-card">
			<view class="account-info">
				<view class="account-number">
					<text>我的账户:</text>
					<text>{{userInfo.name}}</text>
				</view>
				<view class="account-role">
					<text>用户等级:</text>
					<text>普通会员</text>
				</view>
			</view>

			<view style="display: flex;justify-content: center;">
				<view class="amount-info">
					<view class="money">{{parseInt(userInfo.balance)}}</view>
					<view class="desc">账户余额（元）账户积分（{{userInfo.points}}）</view>
				</view>
			</view>


			<view class="footer-info">
				<view class="footer-item">
					<view class="desc-value">0</view>
					<view class="desc-label">代收利息（元）</view>
				</view>

				<view class="footer-item">
					<view class="desc-value">0</view>
					<view class="desc-label">代收本金（元）</view>
				</view>
			</view>

			<view class="action-list">
				<view class="action-btn">充值</view>
				<view class="action-btn" @click="Withdrawal(item)">提现</view>
			</view>

			<view class="menu-list">
				<view class="menu-item" v-for="(item,index) in listData" :key="index" @click="changeClick(item.title)">
					<view class="icon">
						<u-icon size="60" :name="item.icon" color="#2979ff" ></u-icon>
					</view>
					<view class="title">
						{{item.title}}
					</view>
				</view>
			</view>

			<view class="footer-action">
				<view class="btn">安全退出</view>
			</view>



		</view>
	</view>
</template>

<script>
import {signOfDay,getUserInfo} from "../../config/api";

export default {
		data() {
			return {
        userInfo: {},
				listData: [
					{
						icon: 'integral',
						title: '每日签到'
					},
					{
						icon: 'list',
						title: '资金明细'
					},
					{
						icon: 'file-text',
						title: '投资记录'
					},
					{
						icon: 'file-text',
						title: '收益记录'
					},
					{
						icon: 'file-text',
						title: '推广记录'
					},
					{
						icon: 'file-text',
						title: '充值记录'
					},
					{
						icon: 'file-text',
						title: '提现记录'
					},
          {
            icon: 'photo',
            title: '绑定银行卡'
          },
          // {
          //   icon: 'photo',
          //   title: '绑定支付宝'
          // },
          {
            icon: 'order',
            title: '退出登录'
          },
				]
			}
		},
		methods:{
			Withdrawal(item) {
				uni.navigateTo({
				    url: '/pages/withdrawal/index'
				});
			},
			changeClick(title) {
				switch(title){

          case '每日签到':
            signOfDay()
                .then(res=>{
                  this.$refs.uToast.show({
                    type: 'info',
                    message: '签到成功'
                  })
                }).catch(err=>{
              this.$refs.uToast.show({
                type: 'info',
                message: err.msg
              })
            })
            break

					case '资金明细':
						uni.navigateTo({
							url: '../captial-record/index'
						})
						break
					case '投资记录':
						uni.navigateTo({
							url: '../investment-record/index'
						})
						break
					case '收益记录':
					     uni.navigateTo({
					     	url:'../revenue-record/index'
					     })
						 break
					case '推广记录':
						uni.navigateTo({
							url:'../promotion-record/index'
						})
						break
					case '充值记录':
							uni.navigateTo({
								url:'../recharge-record/index'
							})
							break
					case '提现记录':
							uni.navigateTo({
								url:'../withdrawal-record/index'
							})
							break
          case '绑定银行卡':
              uni.navigateTo({
                url: '../bind-bank-card/index'
              })
              break
          case '绑定支付宝':

                uni.navigateTo({
                  url: '/pages/bind-alipay/index'
                })
               break
          case '退出登录':
            uni.clearStorageSync()
            uni.reLaunch({
              url: '/pages/login/index'
            })
            break

				}
			},
      getUserInfo() {
        getUserInfo()
          .then(res=>{
            this.userInfo = res.data
          })
      }
		},
    onLoad() {
      this.getUserInfo()
    }
	}
</script>

<style lang="scss" scoped>

	page {
		background-color: #ddd;
	}

	.user-card {
		position: relative;
		width: 100%;
		height: 400rpx;

		background: linear-gradient(to bottom, #45c7f2, 45%, #592fca);
		.account-info {
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 40rpx;
			font-size: 22rpx;
			color: #fff;
		}
		.amount-info {
			display: flex;
			flex-direction: column;
			align-items: center;
			color: #fff;
			.money {
				font-size: 60rpx;
			}
			.desc {
				margin-top: 20rpx;
			}
		}
		.footer-info {
			position: absolute;
			bottom: 0rpx;
			height: 100rpx;
			width: 100%;
			background: rgba(255,255,255,.2);
			display: flex;
			.footer-item {
				color: #fff;
				font-size: 22rpx;
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-around;
				box-sizing: border-box;
				padding: 10rpx 0;

			}
		}

		.action-list {

			box-sizing: border-box;
			padding: 0 20rpx;
			margin-top: 150rpx;
			background-color: #ddd;

			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.action-btn {
				width: 340rpx;

				height: 68rpx;
				line-height: 68rpx;
				text-align: center;
				background-color: #2C405A;
				color: #fff;
				border-radius: 8rpx;
			}
		}


		.menu-list {
			background-color: #fff;
			.menu-item {
				display: flex;
				height: 80rpx;
				align-items: center;
				box-sizing: border-box;
				padding: 20rpx;
				border-bottom: 1rpx solid #DCDFE6;
			}
			.title {
				margin-left: 12rpx;

			}
		}

		.footer-action {
			display: flex;
			justify-content: center;
			box-sizing: border-box;
			padding: 0 40rpx;
			.btn {
				background-color: #2C405A;
				color: #fff;
				border-radius: 8rpx;
				width: 100%;
				text-align: center;
				height: 80rpx;
				line-height: 80rpx;
				margin-top: 40rpx;
			}

		}

	}
</style>
