<template>
  <div
    class="avatar-img-wrap"
    :style="`width:${vwSize}vw;height:${vwSize}vw;font-size:${vwFontSize}vw`"
  >
    <img
      class="avatar-img"
      v-if="avatar && avatar !== ''"
      :src="avatar"
      alt
      srcset
    />
    <span class="avatar-name" v-else>
      {{ name.length > 2 ? name.substring(name.length - 2) : name }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: Number,
      default: 72
    },
    fontsize: {
      type: Number,
      default: 26
    },
    name: {
      type: String,
      required: true
    },
    avatar: {
      type: String
    }
  },
  computed: {
    vwSize: function() {
      return this.size / 7.5;
    },
    vwFontSize: function() {
     return this.fontsize / 7.5;
    }
  }
};
</script>
<style lang="scss" scoped>
.avatar-img-wrap {
  width: 72px;
  height: 72px;
  border-radius: 1000px;
  overflow: hidden;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  .avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 1000px;
  }
  .avatar-name {
    width: 100%;
    height: 100%;
    font-size: 26px;
    background-color: #ffc0b3;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
