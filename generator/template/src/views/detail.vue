<template>
  <div class="detail-wrap">
    hello detail,page id is {{id}}
  </div>
</template>
<script>
export default {
  data(){
    return {
      id:this.$route.params.id || 0
    }
  }
}
</script>