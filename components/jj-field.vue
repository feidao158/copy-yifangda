<template>
  <div>
    <div class="filed-info">
      <div class="icon" v-if="icon!=null">
      
		<u-icon :name="icon"></u-icon>

      </div>
      <div v-if="label!=null" class="label">{{label}}</div>
      <div class="value">
        <input :type="inputType" :placeholder="placeholder"  @input="eventHandler">
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    model: {
      prop: 'value',
      event: 'cc'
    },
    props: {

      icon: {
        type: String,
        default: null
      },
      label: {
        type: String,
        default: null
      },
      inputType: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: null
      },
      value: {
        default: null
      }

    },
    name: 'cc-filed',
    data() {
      return {

      }
    },
    methods: {
      eventHandler(val) {

        this.$emit('cc',val.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .filed-info {
    height: 80rpx;
    padding: 10rpx;
    box-sizing: border-box;
    margin: 10rpx 0;
    display: flex;
    background-color: #fff;
    align-items: center;
    border: 1rpx solid #EBEEF5;

    .icon {
      flex: 1;
      display: flex;
      justify-content: center;
    }

    .label {
      font-size: 32rpx;
      flex: 3;
    }
    .value {
      flex: 7;
      //border-bottom: 1rpx solid #e7e7e7;
      input {
        width: 100%;
      }
      input::placeholder {
        font-size: 12rpx;
      }
    }
  }
</style>
