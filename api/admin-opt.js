import request from '@/utils/request'

export function getOtp(query) {
  return request({
    url: '/admin/send_otp',
    method: 'get',
    params: query
  })
}

export function verifyOtp(data) {
    return request({
      url: '/admin/verify_otp',
      method: 'post',
      data
    })
  }
  





