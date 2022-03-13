<template>
	<view>
    <u-toast ref="uToast"></u-toast>

    <view class="logo">
			<image src="../../static/logo.png"></image>
		</view>

		<view class="input-list">
			<view class="input-item">
				<view class="label">
					账号
				</view>
				<view class="action">
					<input type="text" v-model="formData.username" placeholder="请输入账号">
				</view>
			</view>

			<view class="input-item">
				<view class="label">
					密码
				</view>
				<view class="action">
					<input type="password" v-model="formData.password" placeholder="请输入登录密码">
				</view>
			</view>
		</view>


		<view class="footer-action">
			<jj-btn name="登录" @click.native="loginHandler"></jj-btn>
		</view>

	</view>
</template>

<script>
  import {login} from "../../config/api";
  import mainBtn from '../../components/jj-btn.vue'
	export default {
		data() {
			return {
        formData: {
          username: null,
          password: null
        }
			}
		},
    onLoad(payload) {
      if(payload) {
        this.formData.username = payload['username']
      }

    },
		components: {
			'jj-btn': mainBtn
		},
    methods: {
      loginHandler() {
        let formData = this.formData
        if (!formData.username) {
          this.$refs.uToast.show({
            type: 'error',
            message: '请填入用户名'
          })
          return
        }

        if (!formData.password) {
          this.$refs.uToast.show({
            type: 'error',
            message: '请填入密码'
          })
          return
        }

        login(formData)
          .then(res=>{
            uni.setStorageSync('jboltjwt', res.jboltjwt);
            uni.switchTab({
              url: '/pages/index/index'
            })
          }).catch(err=>{
          this.$refs.uToast.show({
            type: 'error',
            message: err.msg
          })
          return
        })

      }
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
