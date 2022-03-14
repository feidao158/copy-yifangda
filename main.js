import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from 'uview-ui'
Vue.use(uView)
uni.$u.config.unit = 'rpx'
Vue.config.productionTip = false
App.mpType = 'app'




const app = new Vue({
    ...App
})

require('./config/request.js')(app)

Vue.prototype.$toast = function (content,title='tips'){

    return new Promise((resolve,reject)=>{
        uni.showModal({
            title,
            content,
            showCancel: false,
            success: function() {
                resolve()
            }
        })
    })
}


app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
