import request from '@/utils/request'



export function getRoleDropdownList(headers) {
  return request({
    url: '/role/',
    method: 'get',
    headers
  })
}