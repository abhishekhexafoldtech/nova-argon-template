import request from '@/utils/request'



export function getRoleDropdownList(headers) {
  return request({
    url: '/nova/role/',
    method: 'get',
    headers
  })
}