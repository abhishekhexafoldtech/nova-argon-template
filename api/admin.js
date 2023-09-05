import request from '@/utils/request'



export function addAdmin(data) {
  return request({
    url: '/admin',
    method: 'post',
    data
  })
}