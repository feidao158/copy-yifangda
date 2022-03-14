<template>
	<view style="padding: 20rpx;">
		<view class="banner">
			<image src="../../static/logo.png"></image>
		</view>

		<view class="main-title">{{projectInfo.name}}</view>


		<view class="panel-info">
			<view class="panel-item">
				<view class="label">
					项目规模
				</view>

				<view class="value">
					￥500万元
				</view>
			</view>

      <view class="panel-item">
        <view class="label">
          每份分红
        </view>

        <view class="value">
          {{parseInt(projectInfo.bonus)}}元起
        </view>
      </view>


      <view class="panel-item">
        <view class="label">
          投资周期
        </view>

        <view class="value">
          {{projectInfo.investmentCycle}}天
        </view>
      </view>

		</view>


		<view class="menu-list">
			<view class="menu-item">
				<view class="title">分红方式：</view>
				<view class="value">每日返息，到期还本</view>
			</view>

			<view class="menu-item">
				<view class="title">起投金额：</view>
				<view class="value">{{parseInt(projectInfo.startMoney)}}元</view>
			</view>

			<view class="menu-item">
				<view class="title">投保机构：</view>
				<view class="value">{{projectInfo.guaranteeInstitution}}</view>
			</view>

			<view class="menu-item" style="border:0rpx;">
				<view class="title">投资零风险：</view>
				<view class="value">本金保障</view>
			</view>

			<u-line-progress :percentage="30" activeColor="#3582b3" height="32"></u-line-progress>
		</view>
		<!-- end.. -->

		<view class="detail-info">
			    <u-tabs :list="[{name: '投资详情'},{name: '项目资料'}]"  @click="tabHandler" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;width: 40%"></u-tabs>

				<view class="table-info" v-if="tabActiveIndex==0">
					<view class="table-item" v-for="item in 5">
						<view class="label">
							项目名称
						</view>
						<view class="value">
							易方达医疗保健行业混合
						</view>
					</view>
				</view>

				<view class="project-info" v-if="tabActiveIndex==1">
					中纪委官网12日消息，中央纪委国家监委驻国家安全部纪检监察组原组长刘彦平涉嫌严重违纪违法，目前正接受中央纪委国家监委纪律审查和监察调查。
					刘彦平，出生于1955年8月，1974年4月参加工作。目前，他还是第十三届全国政协委员。
				</view>

		</view>


		<view class="footer-action">
			<view class="btn" @click="confirmAction">
				立即投资
			</view>
		</view>


	</view>
</template>

<script>
import {getProjectDetail} from "../../config/api";

export default {
	data() {
		return {
			tabActiveIndex: 0,
      detailId: null,
      projectInfo: {

      }
		}
	},
	methods: {
		tabHandler(target) {
			this.tabActiveIndex = target.index

		},
		confirmAction() {
			uni.navigateTo({
				url: `../just-bid/index?detailId=${this.detailId}`
			})
		},
    getProjectDetail() {
      getProjectDetail({projectid:this.detailId})
        .then(res=>{
          this.projectInfo = res.data
        })
    }
	},
	onLoad(payload) {
    this.detailId = payload.id
    this.getProjectDetail()
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

	.main-title {
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

	.menu-list {
		font-weight: 500;
		.menu-item {
			display: flex;
			align-items: center;
			padding: 20rpx 0;
			border-bottom: 1rpx solid #C0C0C0;
		}
	}

	.detail-info {
		margin-bottom: 140rpx;
		.table-info {
			margin-top: 20rpx;
			.table-item {
				display: flex;

				box-sizing: border-box;

				.label {
					flex: 3;
					border: 1rpx solid #333333;
					padding: 20rpx;

				}
				.value {
					flex: 7;
					border: 1rpx solid #333333;
					padding: 20rpx;
				}
			}
		}

		.project-info {
			padding: 20rpx;
			margin-top: 10rpx;
			border: 1px solid #333333;
		}
	}

	.footer-action {
		width: 100%;
		display: flex;
		justify-content: center;
		position: fixed;
		bottom: 20rpx;
		.btn {
			width: 620rpx;
			background-color:#3582b3;
			text-align: center;
			border-radius: 20rpx;
			height: 80rpx;
			line-height: 80rpx;
			color: #fff;
		}
	}


</style>
