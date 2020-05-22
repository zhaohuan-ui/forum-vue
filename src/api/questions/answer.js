import request from '@/utils/request'

export function getList(questionId) {
  return request({
    url: '/answer/getList',
    method: 'post',
    params: { questionId }
  })
}
