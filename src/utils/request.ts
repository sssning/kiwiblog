import axios from 'axios'


const service = axios.create({
  baseURL:"https://api.sssyao.cn/",
  timeout: 120000,
})


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
    if(response.data.code === 0){
      return response.data
    }
  },
  error => {
    return error
  }
)

export default service
