<template>
  <view>
    <u-toast ref="uToast"></u-toast>
    <jj-input v-model="formData.userName" label="开户名称"/>
    <jj-input v-model="formData.bankName" label="开户银行"/>
    <jj-input v-model="formData.bankAddress" label="开户地址"/>
    <jj-input v-model="formData.bankNo" label="银行卡号"/>

    <view class="action">
      <jj-btn name="立即添加" @click.native="handler"/>
    </view>

  </view>
</template>


<script>
import {bindBankCard} from "../../config/api";
import customInput from '../../components/jj-input'
import customBtn from '../../components/jj-btn'
export default {

  data() {
    return {
      formData: {
        userName: null,
        bankName: null,
        bankAddress: null,
        bankNo: null
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
      bindBankCard(formData)
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
