import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/question/getList',
    method: 'post',
    data: data
  })
}

export function create(data) {
  return request({
    url: '/question/create',
    method: 'post',
    data: data
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

export function drafts() {
  return request({
    url: '/question/drafts',
    method: 'post'
  })
}

export function later() {
  return request({
    url: '/question/later',
    method: 'post'
  })
}

export function createLater(data) {
  return request({
    url: '/question/createLater',
    method: 'post',
    data: data
  })
}

export function deleteLater(data) {
  return request({
    url: '/question/deleteLater',
    method: 'delete',
    data: data
  })
}

export function attention() {
  return request({
    url: '/question/attention',
    method: 'post'
  })
}

export function createAttention(data) {
  return request({
    url: '/question/createAttention',
    method: 'post',
    data: data
  })
}

export function deleteAttention(data) {
  return request({
    url: '/question/deleteAttention',
    method: 'delete',
    data: data
  })
}
