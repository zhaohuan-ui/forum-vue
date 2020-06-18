import request from '@/utils/request'

export function updateUser(data) {
  return request({
    url: '/user/updateUser',
    method: 'post',
    data
  })
}

export function getUser() {
  return request({
    url: '/user/getUser',
    method: 'get'
  })
}

