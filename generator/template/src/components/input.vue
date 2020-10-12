<template>
  <div class="row flex-parent start">
    <div
      class="col-1"
      :style="{ flex: '0 0 ' + labelWidth + 'vw', width: labelWidth + 'vw' }"
    >
      {{ title }}
      <span v-if="isImportant" class="important">*</span>
    </div>
    <div class="col-2 flex-parent end">
      <div class="input-wrap">
        <input
          v-if="!readonly"
          type="text"
          class="input"
          :class="{ error }"
          :placeholder="placeholder"
          :readonly="readonly"
          :value="value"
          placeholder="请输入"
          @focus="$emit('focus', $event.target.value)"
          @input="$emit('input', $event.target.value)"
          @blur="handlerBlur($event.target.value)"
          @change="$emit('change', $event.target.value)"
        />
        <div v-else class="input input-mulit">{{ value }}</div>
        <div v-if="error || errorTips !== ''" class="error">
          {{ error || errorTips }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "请输入",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    isImportant: false,
    error: {
      required: false,
    },
    labelWidth: {
      type: Number,
    },
    isRequired: {
      type: Boolean,
    },
  },
  data() {
    return {
      errorTips: "",
    };
  },
  methods: {
    handlerBlur(value) {
      if (this.isRequired && value === "") {
        this.errorTips = "必填";
      } else {
        this.errorTips = "";
      }
      // console.log(value);
      this.$emit("blur", value);
    },
  },
};
</script>
<style lang="scss" scoped>
.input-wrap {
  width: 100%;
  .input {
    width: 100%;
    border: 0 none;
    background-color: transparent;
    font-size: 32px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 45px;
    text-align: right;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &.input-mulit {
      white-space: pre-line;
      word-break: break-word;
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(111, 111, 111, 1);
      line-height: 42px;
    }
    &.error {
      color: #333333;
      font-size: 32px;
    }
    &::placeholder {
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      color: rgba(0, 0, 0, 0.5);
    }
  }
  .error {
    color: red;
    font-size: 24px;
    text-align: right;
  }
}
</style>
