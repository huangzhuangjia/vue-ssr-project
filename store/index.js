/*
 * @Author: huangzhuangjia
 * @Date: 2018-05-02 14:16:35
 * @Last Modified by: Junga
 * @Last Modified time: 2018-05-06 15:28:42
 */

import API from '../api/server'

export const actions = {
  async login ({commit}) {
    commit('user/LOGIN')
    const res = await API.login()
    if (res && res.data.success) {
      console.log('success')
    } else {
      console.log('error')
    }
    return res.data
  }
}
