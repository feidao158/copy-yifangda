<template>
<!--  <web-view url="https://chatlink-new.meiqia.cn/widget/standalone.html?eid=97f3296f3131f1f24d8055ffb8769587"></web-view>-->
  <view>
    <web-view v-if="loadStatus" :webview-styles="webviewStyles" :src="baseUrl"></web-view>
  </view>
</template>

<script>
import {getUserInfo} from "../../config/api";
const qs = require('qs')
export default {
	data() {
		return {
      loadStatus: false,
		  userInfo:{},
      baseUrl: null
		}
	},
  methods: {

  },
	onShow() {
    let baseUrl = 'https://efundar.com/chatlink.html?'
		getUserInfo()
      .then(res=>{
        this.userInfo = res.data
        let metadata = {}
        metadata['name'] = this.userInfo.name
        console.log(qs.stringify(metadata))
        this.baseUrl = baseUrl + qs.stringify(metadata)
        this.loadStatus = true
      })
	}
}
</script>

<style lang="scss" scoped></style>
