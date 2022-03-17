<template>
	<view>
		<u-toast ref="uToast"></u-toast>
		<jj-field icon="chat" placeholder="请输入姓名" v-model="formData.userName"></jj-field>
		<jj-field icon="chat" placeholder="请输入身份证号码" v-model="formData.userIdcard"></jj-field>
		<view style="display: flex;justify-content: center;">
			<jj-btn name="提交" @click.native="handler"></jj-btn>
		</view>
	</view>
</template>

<script>
	import {
		checkRealName
	} from '../../config/api.js'
	import filedCom from '../../components/jj-field.vue'
	import primaryBtn from '../../components/jj-btn.vue'
	export default {
		data() {
			return {
				formData: {
					userName: null,
					userIdcard: null,
					idcardType: 1
				}
			}
		},
		components: {
			'jj-field': filedCom,
			'jj-btn': primaryBtn
		},
		methods: {
			handler() {
				let formData = this.formData
				if(formData.userName==null || formData.userName.length==0) {
					this.$refs.uToast.show({
					  type: 'error',
					  message: '请填入姓名'
					})
					return
				}
				
				if(formData.userIdcard==null || formData.userIdcard.length==0) {
					this.$refs.uToast.show({
					  type: 'error',
					  message: '请填入号码'
					})
					return
				}
				checkRealName(this.formData)
					.then(res => {
						this.$toast('实名认证成功')
							.then(res => {
								uni.navigateBack({

								})
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

</style>
