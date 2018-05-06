/*
 * @Author: Junga
 * @Date: 2018-05-06 15:31:28
 * @Last Modified by: Junga
 * @Last Modified time: 2018-05-06 16:05:40
 */
export const state = () => ({
  login: false,
  user: {
    _id: '',
    name: '',
    username: '',
    gravatar: ''
  }
})

export const mutations = {
  LOGIN (state) {
    state.login = true
  }
}
