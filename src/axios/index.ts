// src/utils/http.js
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { ElNotification } from 'element-plus'

const service = axios.create({
  baseURL: import.meta.env.VITE_WS_URL as string, // 从环境变量中获取基础API URL
  timeout: 10000 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    // 在发送请求前做些什么，例如设置令牌
    const token = localStorage.getItem('token')
    if (token) {
      config.headers = config.headers ?? {} // 确保 headers 对象存在
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError): Promise<AxiosError> => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse): any => {
    // 对响应数据做点什么
    return response
  },
  (error: AxiosError): Promise<AxiosError> => {
    // 对响应错误做点什么
    return Promise.reject(error.response?.data)
  }
)

export default service
