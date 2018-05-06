/*
 * @Author: huangzhuangjia 
 * @Date: 2018-05-02 15:06:44 
 * @Last Modified by: Junga
 * @Last Modified time: 2018-05-06 18:55:14
 */
import axios from 'axios'
import env from '../config/env'
import querystring from 'querystring'

// 创建一个axios实例
const ax = axios.create({
  timeout: 30 * 1000, // 30秒超时
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  baseURL: process.env.NODE_ENV === 'development' ? env.devBaseUrl : env.prodBaseUrl
})

// POST传参序列化(添加请求拦截器)
ax.interceptors.request.use(config => {
  if (
    config.method === 'post' ||
    config.method === 'put' ||
    config.method === 'delete' ||
    config.method === 'patch'
  ) {
    config.data = querystring.stringify(config.data) 
  }
  // 用户token验证
  // if (window.localStorage.getItem('TOKEN')) {
  //   config.headers.Authorization = `Bearer ${JSON.parse(window.localStorage.getItem('TOKEN') || '').token}`
  // }
  return config
},
(error) => {
  return Promise.reject(error)
})
// 响应拦截器
ax.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
/**
 * 
 * @param options 
 * {
 *  url: '',
 *  method: 'post',
 *  data: {}
 * }
 */
const fetch = (options) => {
  const defaultOption = { // 默认参数
    url: '',
    data: {},
    method: 'post'
  }
  const settings = Object.assign(true, defaultOption, options)

  if (env.MOCK_ENV) {
    settings.method = 'get'
  }
  const promise = new Promise((resolve, reject) => {
    ax(settings).then((response) => {
      resolve(response)
    }).catch((error) => {
      reject(error)
    })
  })
  return promise
}

export default fetch
