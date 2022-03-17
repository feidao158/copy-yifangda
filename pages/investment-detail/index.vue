<template>
	<view style="padding: 20rpx;">
		<view class="banner">
			<image src="/static/update/20210731013505.jpg"></image>
		</view>

		<view class="main-title">{{projectInfo.name}}</view>


		<view class="panel-info">
			<view class="panel-item">
				<view class="label">
					项目规模
				</view>

				<view class="value">
					￥<text class="blue-text">{{parseInt(projectInfo.scale)}}</text>元
				</view>
			</view>

      <view class="panel-item">
        <view class="label">
          每份分红
        </view>

        <view class="value">
          <text class="blue-text">{{parseInt(projectInfo.bonus)}}</text>元起
        </view>
      </view>


      <view class="panel-item">
        <view class="label">
          投资周期
        </view>

        <view class="value">
          <text class="blue-text">{{projectInfo.investmentCycle}}</text>天
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

			<u-line-progress :percentage="projectInfo.process" activeColor="#3582b3" height="32"></u-line-progress>
		</view>
		<!-- end.. -->

		<view class="detail-info">
			    <u-tabs :list="[{name: '投资详情'},{name: '项目资料'}]"  @click="tabHandler" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;width: 40%"></u-tabs>

				<view class="table-info" v-if="tabActiveIndex==0">


					<view class="table-item">
						<view class="label">
							项目名称
						</view>
						<view class="value">
							{{projectInfo.name}}
						</view>
					</view>

          <view class="table-item">
            <view class="label">
              项目金额
            </view>
            <view class="value red-text">
              {{projectInfo.scale}}
            </view>
          </view>

          <view class="table-item">
            <view class="label">
              每天分红
            </view>
            <view class="value red-text">
              按每天<text >{{projectInfo.projBonusRate}}</text>%的收益(保本保息)
            </view>
          </view>

          <view class="table-item">
            <view class="label">
              投资金额
            </view>
            <view class="value">
              <text class="red-text">最低起投{{projectInfo.startMoney}}元</text>(限买<text class="red-text">1</text>份)
            </view>
          </view>

          <view class="table-item">
            <view class="label">
              项目期限
            </view>
            <view class="value">
             <text class="red-text"> {{projectInfo.investmentCycle}}个</text>自然日
            </view>
          </view>

          <view class="table-item">
            <view class="label">
              收益计算
            </view>
            <view class="value">
              每天分红{{projectInfo.bonus}}元*1天=总收益20元
            </view>
          </view>

          <view class="table-item">
            <view class="label">
              还款方式
            </view>
            <view class="value">
             每日返息，到期还本节假日照常收益
            </view>
          </view>

          <view class="table-item">
            <view class="label">
              结算时间
            </view>
            <view class="value">
              当天15点前投资，当天15点系统自动计息结算收益（例如在15：00成功投资，则在下个自然日15：00收到分红），到期系统将当日分红和产品本金一起返还到您的会员账号中
            </view>
          </view>


          <view class="table-item">
            <view class="label">
              可投金额
            </view>
            <view class="value">
              投资期间只要产品未投满，投资者均可自由投资</view>
          </view>

          <view class="table-item">
            <view class="label">
              安全保障
            </view>
            <view class="value">
              中国民生银行股份有限公司对平台上的每一笔投资提供100％本金保障，平台设立风险备用金，对本金承诺全额垫付；
            </view>
          </view>

          <view class="table-item">
            <view class="label">
              项目概述
            </view>
            <view class="value">
              本项目筹集资金<text class="red-text">{{projectInfo.scale}}</text>元人民币投资本项目（按每日分红{{projectInfo.bonus}}元/天）项目周期为{{projectInfo.investmentCycle}}个自然日，所筹集资金用于该项目直投运作，作为投资者分红固定且无任何风险，所操作一切风险都由公司与担保公司一律承担，投资者不需要承担任何风险。            </view>
          </view>

          <view class="table-item">
            <view class="label">
              推荐奖励
            </view>
            <view class="value">
              在会员中心下方的邀请好友”里转发您的专属推广二维码到朋友圈，通过此邀请二维码注册成功的即为您的一级会员，其充值并成功投资任意项目，您都可以得到其投资金额5％的推厂广奖励，由系统自动赠送！
            </view>
          </view>



        </view>

				<view class="project-info" v-if="tabActiveIndex==1">
          本基金主要投资于标的数即中证基建工程指数的成份股、备选成份股（含存托凭证）。此外为更好地实现投资目标，本基金可少量按于非成份股（包括中小板创业板及其他经中国证监会粮准上市的股、存托凭证）、分、板证、股期批，货币市场工具及中国证监会允许基金投资的其他金融工具，但须符台中国证监会的相关规定
          基金的投资组合比例为本基金的股资产比例不低于基金产的80，其中投资于标的指数成份股和备选成份的产不低于非现金基宝产的90每个交易白日终在扣除股指期货合约需纳的交易保正后保持不低基金销产净值5的现金或到期日在一年以内的政府债券，（详情可调基金合同描说明书等文件）
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
	
	.blue-text {
		color: #3F7FBF;
	}
	
	.red-text {
		color: red;
	}
	
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
          display: flex;
          align-items: center;

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
