<template>
	<view>
		<view class="btn">
			{{name}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			name: {
				default: null
			}
		},
		name:"jj-btn",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.btn {
	width: 620rpx;
	background-color:#3582b3;
	text-align: center;
	border-radius: 20rpx;
	height: 80rpx;
	line-height: 80rpx;
	color: #fff;
}
</style>
