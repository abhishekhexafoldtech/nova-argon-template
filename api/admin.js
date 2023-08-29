import request from '@/utils/request'



export function addNewAdmin(data) {
  return request({
    url: '/nova_auth/admin/',
    method: 'post',
    data
  })
}