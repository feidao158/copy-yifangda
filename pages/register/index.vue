<template>
	<view>
		            <jj-field icon="chat" placeholder="请输入用户名" v-model="registerForm.username"></jj-field>
		            <jj-field icon="lock" input-type="password" placeholder="请设置登录密码" v-model="registerForm.password"></jj-field>
		            <jj-field icon="lock" input-type="password" placeholder="请再输入登录密码" v-model="registerForm.confirmPassword"></jj-field>
		            <jj-field icon="man-add" input-type="text" placeholder="请输入推荐人ID" v-model="registerForm.code"></jj-field>
					
					<view class="action">
						<jj-btn name="确认注册"></jj-btn>
					</view>
	</view>
</template>

<script>
	import filedCom from '../../components/jj-field.vue'
	import primaryBtn from '../../components/jj-btn.vue'
	export default {
		data() {
			return {
				registerForm: {
					
				}
			}
		},
		components: {
			'jj-field': filedCom,
			'jj-btn': primaryBtn
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
