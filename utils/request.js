import axios from 'axios'
import { useAuthStore } from '@/stores/authStore';
import { getToken } from '@/utils/auth'



// create an axios instance
const service = axios.create({
  // baseURL: process.env.API_BASE_URL, // api of base_url
  baseURL: "https://auth.newgas.online/nova_auth", // api of base_url
  timeout: 1000000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // if (useAuthStore().getLoginToken) {
    //   config.headers['Authorization'] = 'Bearer ' + getToken()
    //   // config.headers['Access-Control-Allow-Origin'] = '*'
    //   config.headers['Access-Control-Allow-Headers'] = 'Authorization'
    // }

    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response,
  error => {
    console.log('err: ' + error.message) // for debug
    return Promise.reject(error)
  }
)





export default service