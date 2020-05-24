import request from '@/utils/request'

export function getList(questionId) {
  return request({
    url: '/answer/getList',
    method: 'post',
    params: { questionId }
  })
}

export function createAnswer(data, querstionId, commentId,token) {
  return request({
    url: '/answer/createAnswer',
    method: 'post',
    data: data,
    params: { querstionId, commentId, token }
  })
}
