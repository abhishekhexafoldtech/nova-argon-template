import request from '@/utils/request'



export function addNewAdmin(data) {
  return request({
    url: '/admin',
    method: 'post',
    data
  })
}