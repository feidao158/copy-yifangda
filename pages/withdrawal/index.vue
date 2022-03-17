<template>
	<view class="withdrawal-page">
    <u-toast ref="uToast"></u-toast>
		<view class="info-list">
			<view class="select-action">
				<view class="label">
					提现方式
				</view>

				<view class="action" @click="show=true">
					<u-picker :show="show" :columns="columns"  @confirm="selectConfirmHandler" @cancel="show=false"></u-picker>
					<view class="action-input">
            {{selectItem==null? '请选择提现方式': `${selectItem['bankName']}(${selectItem['bankNo']})`}}
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
						<input type="number" placeholder="0.00" v-model="formData.drawMoney">
					</view>
				</view>

				<view class="desc">
					可提现金额：{{balance}}
				</view>

			</view>


			<view class="input-action-password">
				<view class="label">
					交易密码
				</view>

				<view class="input-action">
					<input type="password" v-model="formData.payPwd">
				</view>

			</view>

			<view class="button">
				<u-button type="primary" text="确认提现" @click.native="confirmWithdraw"></u-button>
			</view>

		</view>
	</view>
</template>

<script>
import {checkBalance,getWallectList,confirmWithDraw} from "../../config/api";

export default {
		data() {
			return {
				show: false,
        balance: 0,
        bankList: [],
        selectVal: null,
        selectItem: null,
        formData: {
          payPwd: null,
          drawMoney: null
        }
			}
		},
  computed: {
    columns() {
      let indexInfo = this.bankList.map(dataItem=>dataItem['bankName'] + '(' + dataItem['bankNo'] + ')')
      console.log(indexInfo)
      return [indexInfo]
    }
  },

    methods: {
      checkBalance() {
        checkBalance()
          .then(res=>{
            this.balance = res.data
          })
      },
      getWallectList() {
        let _this = this
        getWallectList()
          .then(res=>{
            _this.bankList = res.data.bankcards
            // _this.columns[0] = res.data.bankcards.map(dataItem=>dataItem['bankName'])


          })
      },
      selectConfirmHandler(payload) {
        this.selectItem = this.bankList[payload.indexs[0]]
        console.log(payload)
        this.show = false

      },
      confirmWithdraw() {
        let formData = this.formData
        if (formData.drawMoney==null) {
          this.$refs.uToast.show({
            type: 'error',
            message: '请填入提现金额'
          })
          return
        }

        if (formData.payPwd==null) {
          this.$refs.uToast.show({
            type: 'error',
            message: '请填入支付密码'
          })
          return
        }
        if (this.selectItem==null) {
          this.$refs.uToast.show({
            type: 'error',
            message: '请选择提现方式'
          })
          return
        }
        formData['wallet'] = this.selectItem['bankNo']
        confirmWithDraw(formData)
          .then(res=>{
            this.$toast('提现申请成功')
              .then(()=>{
                uni.navigateBack()
              })
          }).catch(err=>{
          console.log('error111')
          this.$refs.uToast.show({
            type: 'error',
            message: err.msg
          })
        })



      }
    },
  onLoad() {
      this.checkBalance()
      this.getWallectList()
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
