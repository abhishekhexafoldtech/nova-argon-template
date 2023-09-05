import request from '@/utils/request'



export function getRoleDropdownList() {
  return request({
    url: '/user_role',
    method: 'get'
  })
}





