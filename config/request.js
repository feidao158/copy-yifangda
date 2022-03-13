// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
    // 初始化请求配置
    uni.$u.http.setConfig((config) => {
        /* config 为默认全局配置*/
        config.baseURL = 'http://154.82.110.96:9202'; /* 根域名 */
        return config
    })

	// 请求拦截
	uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	    // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
	    config.data = config.data || {}
		// 根据custom参数中配置的是否需要token，添加对应的请求头
		config.header['jboltappid'] = 'jbn9j7yemgsqolt'
		config.header['JBOLTAPI'] = true
		const jboltjwt = uni.getStorageSync('jboltjwt');
		config.header['jboltjwt'] = jboltjwt


		if(config?.custom?.auth) {
			// 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
			config.header.token = vm.$store.state.userInfo.token
		}
	    return config
	}, config => { // 可使用async await 做异步操作
	    return Promise.reject(config)
	})

	// 响应拦截
	uni.$u.http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
		const data = response.data

		if(response.config.url === '/api/userinfo/userLogin') {
			data['jboltjwt'] = response.header['jboltjwt']

		}
		if(data.code===0) {
			return data
		}else {
			return Promise.reject(data)
		}

	}, (response) => {
		// 对响应错误做点什么 （statusCode !== 200）
		return Promise.reject(response)
	})
}
