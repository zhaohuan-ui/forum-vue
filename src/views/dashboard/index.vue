<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      最新专题
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 40px;
  }
  &-text {
    font-weight:bold;
    margin-left: 180px;
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
