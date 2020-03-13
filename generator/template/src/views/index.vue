<template>
  <div class="index-wrap">
    <h1>这是一个基于vue cli的快速启动模板</h1>
    hello index now time is {{ $dayjs() }}
    <br />
    print 天气接口信息 {{ apiResult }}
  </div>
</template>

<script>
import apiService from "@/services/apiService";
export default {
  data() {
    return {
      apiResult: null
    };
  },
  created() {
    this.testApi();
  },
  methods: {
    testApi() {
      apiService.getTest().then(res => {
        console.log(res);
        this.apiResult = JSON.stringify(res);
      });
    }
  }
};
</script>
