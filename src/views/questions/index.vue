<template>
  <!-- 在此div下设计页面 -->
  <div class="dashboard-container">
      {{ usernameStr }}
  </div>
</template>

<script>
import { getList } from '@/api/questions/questions'

export default {
  name: 'Questions',
  data() {
    return {
      list: [],
      multipleSelection: [],
      usernameStr: "开始设计问答页吧!"
    }
  },
  created() {
    /* 调用起始方法 */
    this.fetchList()
  },
  methods: {
    fetchList() {
      this.$message.success('进入问答页!')
    }
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 20px;
    font-weight:bold;
    margin-left: 157px;
    margin-right: 145px;
    font-size: 30px;
    line-height: 46px;
   }
}
</style>
