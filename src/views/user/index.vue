<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      {{ usernameStr }}
    </div>
  </div>
</template>

<script>
import { getList, exportExcel } from '@/api/myuser'
import { seq } from '@/utils/seq'
import Pagination from '@/components/Pagination'
import settings from '@/settings'
import waves from '@/directive/waves'

export default {
  name: 'User',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      settings: settings,
      listQuery: {
        page: 1,
        limit: 10
      },
      list: [],
      total: 0,
      listLoading: false,
      multipleSelection: [],
      exportLoading: false,
      usernameStr: "我是郑永顺爸爸!"
    }
  },
  created() {
    //this.fetchList()
  },
  methods: {
    fetchList() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = seq(response.data.list, response.data.page, response.data.limit)
        this.total = response.data.total
        this.listQuery.page = response.data.page
        this.listQuery.limit = response.data.limit
        this.listLoading = false
      }).catch(error => {
        this.$message.error(error.message)
      })
    },
    onExport() {
      exportExcel().then(res => { // 调用接口
        console.log(res) // 此处res为bolb类文件对象 Blob(4412) {size: 4412, type: "application/octet-stream"}

        var blob = new Blob([res], { type: 'application/vnd.ms-excel' }) // type这里表示xlsx类型
        // { type: 'application/vnd.openxmlformats-  officedocument.spreadsheetml.sheet;charset=utf-8' }
        var downloadElement = document.createElement('a')
        var href = window.URL.createObjectURL(blob) // 创建下载的链接
        downloadElement.href = href
        downloadElement.download = 'result.xlsx' // 下载后文件名
        document.body.appendChild(downloadElement)
        downloadElement.click() // 点击下载
        document.body.removeChild(downloadElement) // 下载完成移除元素
        window.URL.revokeObjectURL(href) // 释放掉blob对象
      }).catch(err => {
        this.$message({
          message: '下载失败！',
          type: 'error',
          showClose: true
        })
      })
    },
    onSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>
<style lang="scss" scoped>
  .dashboard {
    &-container {
       margin: 30px;
     }
    &-text {
       font-weight:bold;
       margin-left: 180px;
       font-size: 30px;
       line-height: 46px;
     }
  }
</style>
