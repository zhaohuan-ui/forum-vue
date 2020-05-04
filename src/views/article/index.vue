<template>
  <!-- 在此div下设计页面 -->
  <div class="dashboard-container">
      {{ usernameStr }}
  </div>
</template>

<script>

import { getList } from '@/api/article/article'

export default {
  name: 'Article',
  data() {
    return {
      list: [],
      multipleSelection: [],
      usernameStr: "开始设计文章页吧!"
    }
  },
  created() {
    /* 调用起始方法 */
    this.fetchList()
  },
  methods: {
    fetchList() {
      this.$message.success('进入文章页!')
    }
  }
}
</script>
<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 40px;
      font-weight:bold;
      margin-left: 210px;
      font-size: 30px;
      line-height: 46px;
     }
  }
</style>
