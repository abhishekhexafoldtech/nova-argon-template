import request from '@/utils/request'



export function loginByWeb(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}

export function logout(data) {
  return request({
    url: '/logout',
    method: 'post',
    data
  })
}

export function getUserInfo(query) {
  return request({
    url: 'user-info',
    method: 'get',
    params: query
  })
}





