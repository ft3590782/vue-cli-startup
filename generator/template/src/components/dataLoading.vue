<template>
  <div class="data-loading-wrap flex-parent center">
    <div v-show="!isFinish" v-if="isShowLoadingIcon" class="loadingio-spinner-ellipsis-vyiire26zwf">
      <div class="ldio-p9l0k5lpccq">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <span v-show="!isFinish">{{ loadingText }}</span>
    <span v-show="isFinish && !isEmpty">{{ finishText }}</span>
    <span v-show="isFinish && isEmpty" class="empty">{{ noDataText }}</span>
  </div>
</template>
<script>
export default {
  props: {
    isShowLoadingIcon: {
      //是否展示loading 动画
      type: Boolean,
      default: false,
    },
    isEmpty: {
      //是否在没有数据时展示一行文本
      type: Boolean,
      default: false,
    },
    //loading默认文案
    loadingText: {
      type: String,
      default: "加载中 ...",
    },
    //无数据默认文案
    noDataText: {
      type: String,
      default: "暂无数据",
    },
    //是否全部数据加载完毕
    isFinish: {
      type: Boolean,
      default: false,
    },
    //是否全部数据加载完毕文案
    finishText: {
      type: String,
      default: "没有更多数据了",
    },
  },
};
</script>

<style lang="scss" scoped>
.data-loading-wrap {
  font-size: 24px;
  text-align: center;
  color: #858b9c;
  line-height: 50px;
  flex-direction: column;
  padding: 20px;

  .icon-loading {
    width: 40px;
    height: 40px;
    background-image: url("~@/assets/images/Pulse-1s-40px.svg");
    background-size: 100% 100%;
    display: inline-block;
  }

  @keyframes ldio-p9l0k5lpccq {
    0% {
      transform: translate(6px, 40px) scale(0);
    }
    25% {
      transform: translate(6px, 40px) scale(0);
    }
    50% {
      transform: translate(6px, 40px) scale(1);
    }
    75% {
      transform: translate(40px, 40px) scale(1);
    }
    100% {
      transform: translate(74px, 40px) scale(1);
    }
  }
  @keyframes ldio-p9l0k5lpccq-r {
    0% {
      transform: translate(74px, 40px) scale(1);
    }
    100% {
      transform: translate(74px, 40px) scale(0);
    }
  }
  @keyframes ldio-p9l0k5lpccq-c {
    0% {
      background: #322923;
    }
    25% {
      background: #d7a05b;
    }
    50% {
      background: #896038;
    }
    75% {
      background: #513e2e;
    }
    100% {
      background: #322923;
    }
  }
  .ldio-p9l0k5lpccq div {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translate(40px, 40px) scale(1);
    background: #322923;
    animation: ldio-p9l0k5lpccq 1.5384615384615383s infinite cubic-bezier(0, 0.5, 0.5, 1);
  }
  .ldio-p9l0k5lpccq div:nth-child(1) {
    background: #513e2e;
    transform: translate(74px, 40px) scale(1);
    animation: ldio-p9l0k5lpccq-r 0.3846153846153846s infinite cubic-bezier(0, 0.5, 0.5, 1),
      ldio-p9l0k5lpccq-c 1.5384615384615383s infinite step-start;
  }
  .ldio-p9l0k5lpccq div:nth-child(2) {
    animation-delay: -0.3846153846153846s;
    background: #322923;
  }
  .ldio-p9l0k5lpccq div:nth-child(3) {
    animation-delay: -0.7692307692307692s;
    background: #513e2e;
  }
  .ldio-p9l0k5lpccq div:nth-child(4) {
    animation-delay: -1.1538461538461537s;
    background: #896038;
  }
  .ldio-p9l0k5lpccq div:nth-child(5) {
    animation-delay: -1.5384615384615383s;
    background: #d7a05b;
  }
  .loadingio-spinner-ellipsis-vyiire26zwf {
    width: 38px;
    height: 38px;
    display: inline-block;
    overflow: hidden;
    background: none;
  }
  .ldio-p9l0k5lpccq {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.38);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-p9l0k5lpccq div {
    box-sizing: content-box;
  }

  .empty {
    // width: 750px;
    // height: 741px;
    // background-image: url("~@/assets/images/empty.png");
    // background-size: 100% 100%;
  }
}
</style>
