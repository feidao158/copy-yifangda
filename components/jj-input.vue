<template>
<view>
  <view class="input-item">
    <view class="label" v-if="label">
      {{label}}
    </view>
    <view class="action">
      <input type="text" :placeholder="placeholder" @input="eventHandler">
    </view>
  </view>
</view>
</template>


<script>
export default {
  props: {
    label: {
      default: null
    },
    placeholder: {
      default: null
    }
  },
  data() {
    return {
      data: null,
    }
  },
  methods: {
    eventHandler(val) {

      this.$emit('cc',val.target.value)
    }
  },
  model: {
    prop: 'value',
    event: 'cc'
  },
}
</script>


<style lang="scss" scoped>
.input-item {
  border-bottom: 1rpx solid #C0C0C0;
  display: flex;
  background-color: #fff;
  padding: 20rpx 40rpx;

  .label {
    flex: 4;
  }

  .action {
    flex: 12;
  }
}
</style>
