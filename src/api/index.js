import axios from 'axios'
import store from '@/store/index'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})
// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么 配置token
  if (store.getters.token) {
    config.headers['token'] = store.getters.token;
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  if (response.data.code === 401) {
    // 对token 失效做统一提示
    Message.error('请求服务出现异常，请刷新重试！');
  }
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  console.log(error)
  return Promise.reject(error);
});
export default service
