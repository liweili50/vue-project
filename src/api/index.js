import axios from 'axios'
import store from '@/store/index'
const service = axios.create({
  baseUrl: 'http://liweili/',
  timeout: 5000
})
// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么 配置token
  if (store.getters.token) {
    config.headers['X-Token'] = store.getters.token;
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  alert('请求出错')
  console.log(error)
  return Promise.reject(error);
});
export default service
