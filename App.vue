<script>
	export default {
		onLaunch: function() {

      let tokenInfo = uni.getStorageSync('jboltjwt')
	  
      if (tokenInfo==null || tokenInfo.length==0) {
		  console.log('login..')
        uni.reLaunch({
          url: '/pages/login/index'
        })
      }else {
        uni.reLaunch({
          url: '/pages/index/index'
        })
      }

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	/*每个页面公共css */
</style>
