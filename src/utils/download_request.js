import axios from 'axios'
import store from '../store'
import { getToken } from '@/utils/auth'
import { Message } from 'element-ui'

const downloadService = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 60000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  responseType: 'arraybuffer'
})

downloadService.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

downloadService.interceptors.response.use(
  response => { // http请求正常
    if (!response.headers.hasOwnProperty('filename')) {
      Message.error('文件下载出错')
      return
    }
    const blob = new Blob([response.data])
    if (window.navigator.msSaveOrOpenBlob) { // 兼容IE10
      navigator.msSaveBlob(blob, decodeURI(response.headers['filename']))
    } else {
      const href = URL.createObjectURL(blob)
      const downloadElement = document.createElement('a')
      downloadElement.href = href
      downloadElement.download = decodeURI(response.headers['filename'])
      document.body.appendChild(downloadElement)
      downloadElement.click() // 点击下载
      document.body.removeChild(downloadElement) // 下载完成移除元素
      window.URL.revokeObjectURL(href) // 释放掉blob对象
    }
  },
  () => { // http请求失败
    Message.error('文件下载出错')
  }
)

export default downloadService
