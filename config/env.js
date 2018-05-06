/*
 * @Author: Junga 
 * @Date: 2018-05-06 16:57:10 
 * @Last Modified by: Junga
 * @Last Modified time: 2018-05-06 18:52:47
 */

import * as serverProvider from '../api/mock/serverProvider'

let MOCK_ENV = false // 判断当前是否开启mock数据模拟
let devBaseUrl = ''
let currentProvider = 'provider1' // 当前服务提供者
let MOCK_PORT = '3333'
const prodBaseUrl = 'http://xz.yy.com'

console.log(process.env.use_mock)

if (process.env.use_mock) {
  MOCK_ENV = true
  devBaseUrl = 'http://localhost' + ':' + MOCK_PORT // 模拟数据服务器上下文
}

if (process.env.NODE_ENV === 'development' && !process.env.use_mock) {
  devBaseUrl = 'http://' + serverProvider[currentProvider] // 当前服务提供者
}

export default {
  MOCK_PORT,
  MOCK_ENV,
  devBaseUrl,
  prodBaseUrl
}
