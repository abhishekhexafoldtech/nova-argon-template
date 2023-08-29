import request from '@/utils/request'

export function adminSendCred(data) {
    return request({
      url: '/admin/send_creds',
      method: 'post',
      data
    })
  }
  





