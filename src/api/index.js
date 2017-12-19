import axios from 'axios'

const service = axios.create({
  baseUrl: 'https://some-domain.com/api/',
  timeout: 5000
})

// request拦截器
service.interceptors.resquest.use(function (config) {
   // 在发送请求之前做些什么
   // 请求数据之前为请求头添加token
  // if (store.getters.token) {
  //    config.headers['X-Token'] = getToken()
  // }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default service
