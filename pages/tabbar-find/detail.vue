<template>
	<view>
		<view class="content" v-html="content"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '<h1> Hello World!</h1>' 
			}
		}
	}
</script>

<style>
</style>
