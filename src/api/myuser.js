import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/excel/all',
    method: 'post',
    data
  })
}
export function exportExcel() {
  return request({
    url: '/excel/export',
    method: 'post',
    responseType: 'blob' // 表明返回服务器返回的数据类型
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  })
}
