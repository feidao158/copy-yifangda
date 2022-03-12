<template>
	<view class="find-page">
		<view class="banner-image">
			<image src="http://m.yifangfu.com/lib/icon_sercuity_bg.jpg"></image>
		</view>
		<view class="container">
			<view class="list-title">最新咨询</view>
			<view class="list" v-for="(item,index) in list" :key="index" @click="changeItem(item)">
				<view class="list-item">
					<view class="name">{{item.name}}</view>
					<image :src="item.url" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{
						name: '风险控制',
						url: '/static/logo.png'
					},
					{
						name: '资金安全',
						url: '/static/logo.png'
					},
					{
						name: '企业资质',
						url: '/static/logo.png'
					},
					{
						name: '公司荣誉',
						url: '/static/logo.png'
					},
					{
						name: '公司简介',
						url: '/static/logo.png'
					}
					]
			}
		},
		methods:{
			changeItem(item) {
				uni.navigateTo({
				    url: '/pages/tabbar-find/detail'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.find-page {
		.banner-image {
		margin-top: 20rpx;
		height: 400rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.container {
		width: 100%;
		height: auto;
		padding: 20rpx 0 20rpx 0;
		background-color: #ddd;
		box-sizing: border-box;
		.list-title {
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			background-color: #fff;
			border-bottom: 1rpx solid #ddd;
			padding-left: 20rpx;
		}
		.list {
			.list-item {
				display: flex;
				width: 100%;
				height: 200rpx;
				justify-content: space-between;
				align-items: center;
				background-color: #fff;
				border-bottom: 1rpx solid #ddd;
				.name {
					margin-left: 20px;
				}
				image {
					width: 40rpx;
					height: 40rpx;
					margin-right: 20rpx;
				}
			}
		}
	}
	}
	
</style>
