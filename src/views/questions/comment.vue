<template>
  <!-- 在此div下设计页面 -->
  <div class="dashboard-container">

  </div>
</template>

<script>
import {getList} from '@/api/topic/topic'

export default {
  name: 'Comment',
  data() {
    return {
      list: [],
      multipleSelection: [],
    }
  },
  created() {
    /* 调用起始方法 */
    this.fetchList()
  },
  methods: {
    fetchList() {
      let id = this.$route.query.id;
    }
  }
}
</script>
<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 20px;
    font-weight: bold;
    margin-left: 157px;
    margin-right: 145px;
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
