/*
 * @Author: Junga 
 * @Date: 2018-05-06 16:57:10 
 * @Last Modified by: huangzhuangjia
 * @Last Modified time: 2018-05-07 11:55:04
 */

import * as serverProvider from '../api/mock/serverProvider'

let MOCK_ENV = false // 判断当前是否开启mock数据模拟
let devBaseUrl = ''
let currentProvider = 'provider1' // 当前服务提供者
let MOCK_PORT = process.env.MOCK_PORT
const prodBaseUrl = 'http://xy.yy.com'

if (process.env.USE_MOCK) {
  MOCK_ENV = true
  devBaseUrl = 'http://localhost' + ':' + MOCK_PORT // 模拟数据服务器上下文
}

if (process.env.NODE_ENV === 'development' && !process.env.USE_MOCK) {
  devBaseUrl = 'http://' + serverProvider[currentProvider] // 当前服务提供者
}

export default {
  MOCK_PORT,
  MOCK_ENV,
  devBaseUrl,
  prodBaseUrl
}
