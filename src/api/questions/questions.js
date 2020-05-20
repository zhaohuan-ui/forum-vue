import request from '@/utils/request'

export function getList(token) {
  return request({
    url: '/question/getList',
    method: 'post',
    params: { token }
  })
}

export function create(data,token) {
  return request({
    url: '/question/create',
    method: 'post',
    data: data,
    params: { token }
  })
}

export function update(data) {
  return request({
    url: '/question/update',
    method: 'post',
    data
  })
}

export function deleteStatus(data) {
  return request({
    url: '/question/delete',
    method: 'delete',
    data
  })
}

export function drafts(token) {
  return request({
    url: '/question/drafts',
    method: 'post',
    params: { token }
  })
}

export function later(token) {
  return request({
    url: '/question/later',
    method: 'post',
    params: { token }
  })
}

export function createLater(data,token) {
  return request({
    url: '/question/createLater',
    method: 'post',
    data: data,
    params: { token }
  })
}

export function deleteLater(data,token) {
  return request({
    url: '/question/deleteLater',
    method: 'delete',
    data: data,
    params: { token }
  })
}

export function attention(token) {
  return request({
    url: '/question/attention',
    method: 'post',
    params: { token }
  })
}

export function createAttention(data,token) {
  return request({
    url: '/question/createAttention',
    method: 'post',
    data: data,
    params: { token }
  })
}

export function deleteAttention(data,token) {
  return request({
    url: '/question/deleteAttention',
    method: 'delete',
    data: data,
    params: { token }
  })
}
