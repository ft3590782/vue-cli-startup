<template>
  <div class="selector-wrap" :id="controlId">
    <div
      class="selector"
      :class="{ active: optionActivited }"
      @click="handleSelectorClick"
    >
      <span class="displayValue">
        <slot name="displayValue">{{ pickedItem ? pickedItem.key : "" }}</slot>
      </span>
      <slot name="icon"><span class="icon"></span></slot>
    </div>
    <transition name="fade-down">
      <div v-show="optionActivited" class="option-wrap">
        <div class="options-list">
          <div
            class="options-item"
            v-for="(item, index) in options"
            :key="index"
            @click="handleOptionClick(item)"
          >
            {{ item.key }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
function createRandomId(key) {
  //生成一个随机ID

  let random = (m, n) => {
    return parseInt(Math.random() * (m - n + 1) + n);
  };
  return key + "_" + new Date().valueOf() + "_" + random(0, 9999);
}
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    options: {
      type: Array,
      default: []
    }
  },
  created() {
    this.controlId = createRandomId("selector");
    this.$emit("afterCreated", this.controlId);

    if (this.options.length) {
      this.pickedItem = this.options[0];
      this.$emit("change",  this.pickedItem );
    }
  },
  data() {
    return {
      controlId: null,
      optionActivited: false,
      pickedItem: null
    };
  },
  watch: {
    checked: function(newValue) {
      this.pickedItem = newValue || null;
    }
  },
  methods: {
    handleSelectorClick() {
      this.optionActivited = !this.optionActivited;
    },
    handleOptionClick(val) {
      this.pickedItem = val;
      this.optionActivited = false;
      this.$emit("change", val);
    }
  }
};
</script>
<style lang="scss" scoped>
.selector-wrap {
  width: 212px;
  height: 63px;
  position: relative;
  font-size: 28px;
  overflow: visible;
}
.selector {
  width: 212px;
  height: 63px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 2px 12px 0px rgba(253, 194, 183, 1);
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 28px;
  position: relative;
  z-index: 2;

  .displayValue {
    width: 100%;
    height: 40px;
    line-height: 40px;
    flex: 1 1 auto;
  }

  .icon {
    width: 15px;
    height: 15px;
    flex: 0 0 15px;
    position: relative;
    // background-image: url("~@/assets/icon/arrow_pink_down.svg");
    &::before {
      content: "";
      width: 0;
      height: 0;
      border: 15px solid;
      border-color: #fb706d transparent transparent transparent;
      transform: scale(0.5);
      position: absolute;
      top: 0;
      left: -50%;
      transform-origin: center 25%;
      transition: transform 0.3s linear;
    }
  }
  &.active {
    .icon {
      &::before {
        transform: scale(0.5) rotate(180deg);
      }
    }
  }
}
.option-wrap {
  position: absolute;
  z-index: 1;
  top: 73px;
  left: 0px;
  width: 100%;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0px 2px 12px 0px rgba(253, 194, 183, 1);
  border-radius: 8px;
  line-height: 60px;
  //   opacity: 0;
  //   transform: translateY(-100%);
  //   line-height: 60px;
  //   &.active {
  //     opacity: 1;
  //     transform: translateY(0);
  //     transition: all 0.3s linear;
  //     transition-delay: .1s;
  //   }
}
</style>
<style lang="scss">
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.15s ease;
}
.fade-down-enter,
.fade-down-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
