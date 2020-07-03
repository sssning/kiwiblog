import axios from 'axios'
import store from '@/store/index.js'
import router from '@/router/index.js'


const service = axios.create({
  baseURL:'https://api.sssyao.cn/',
  timeout: 120000,
})

//service.defaults.headers['Content-Type'] = "application/x-www-form-urlencoded;charset=UTF-8";


service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) 
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return error
  }
)

export default service
