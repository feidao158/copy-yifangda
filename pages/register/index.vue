<template>
	<view>
		<u-toast ref="uToast"></u-toast>

    <jj-field icon="chat" placeholder="请输入用户名" v-model="registerForm.username"></jj-field>
		<jj-field icon="lock" input-type="password" placeholder="请设置登录密码" v-model="registerForm.password"></jj-field>
		<jj-field icon="lock" input-type="password" placeholder="请再次输入登录密码" v-model="registerForm.confirmPassword">
		</jj-field>

		<jj-field icon="lock" input-type="password" placeholder="请设置支付密码" v-model="registerForm.payPassword"></jj-field>
		<jj-field icon="lock" input-type="password" placeholder="请再次输入支付密码" v-model="registerForm.confirmPayPassword">
		</jj-field>

		<jj-field icon="man-add" input-type="text" placeholder="请输入推荐人ID" v-model="registerForm.code"></jj-field>

		<view class="action">
			<jj-btn name="确认注册" @click.native="registerAction"></jj-btn>
		</view>
	</view>
</template>

<script>
	import {
		register
	} from '../../config/api.js'
	import filedCom from '../../components/jj-field.vue'
	import primaryBtn from '../../components/jj-btn.vue'
	export default {
		data() {
			return {
				registerForm: {
					username: null,
					password: null,
					confirmPassword: null,
					payPassword: null,
					confirmPayPassword: null,
					code: null
				},

			}
		},
		components: {
			'jj-field': filedCom,
			'jj-btn': primaryBtn
		},
		onLoad() {

		},
		methods: {

      registerSuccessHandler() {
        uni.showModal({
          title: 'tips',
          content: '注册成功',
          showCancel: false,
          success: function() {
            console.log('xxx')
            uni.redirectTo({
              url: '/pages/login/index?username=123'
            });
          }
        })
      },

			registerAction() {
        let registerForm = this.registerForm
				let nullCheckStatus = true
				Object.keys(this.registerForm).forEach(keyItem=>{
					let param = this.registerForm[keyItem]
					if(param == null || param.length==0) {
						nullCheckStatus = false
					}
				})
        if (nullCheckStatus===false) {
          this.$refs.uToast.show({
            type: 'error',
            message: '请填入完整表单'
          })
          return
        }

        if(!(registerForm.password==registerForm.confirmPassword)) {
          this.$refs.uToast.show({
            type: 'error',
            message: '请确认登录密码是否一致'
          })
          return
        }

        if(!(registerForm.payPassword==registerForm.confirmPayPassword)) {
          this.$refs.uToast.show({
            type: 'error',
            message: '请确认支付密码是否一致'
          })
          return
        }

        registerForm['paypwd'] = registerForm.payPassword
        register(registerForm)
          .then(res=>{
            uni.showModal({
              title: 'tips',
              content: '注册成功',
              showCancel: false,
              success: function() {
                console.log('xxx')
                uni.redirectTo({
                  url: `/pages/login/index?username=${registerForm['username']}`
                });
              }
            })


          }).catch(err=>{
          this.$refs.uToast.show({
            type: 'error',
            message: err.msg
          })
        })


			}
		}
	}
</script>

<style lang="scss" scoped>
	.action {
		display: flex;
		justify-content: center;
		margin-top: 40rpx;
	}
</style>
