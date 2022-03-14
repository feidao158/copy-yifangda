<template>
  <view>
    <u-toast ref="uToast"></u-toast>
    <jj-input v-model="formData.userName" label="用户名"/>
    <jj-input v-model="formData.zhifubaoAccount" label="账号"/>


    <view class="action">
      <jj-btn name="立即添加" @click.native="handler"/>
    </view>

  </view>
</template>


<script>
import {bindAlipay} from "../../config/api";
import customInput from '../../components/jj-input'
import customBtn from '../../components/jj-btn'
export default {

  data() {
    return {
      formData: {
        userName: null,
        zhifubaoAccount: null,
      }
    }
  },
  methods: {
    handler() {
      let formData = this.formData
      let nullCheckStatus = true
      Object.keys(formData).forEach(item=>{
        if (!(formData[item])) {
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
      bindAlipay(formData)
          .then(res=>{
            this.$toast('绑定成功')
                .then(()=>{
                  uni.navigateBack()
                })
          }).catch(err=>{
        this.$refs.uToast.show({
          type: 'error',
          message: err.msg
        })
      })
      console.log(this.username)
    }
  },
  components: {
    'jj-input': customInput,
    'jj-btn': customBtn
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
