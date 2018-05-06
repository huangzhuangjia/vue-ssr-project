import fetch from '../fetch'
import env from '../../config/env'
import API from './api'
import MOCK_API from '../mock/mockAPI'

let service = {}

service = {
  login: (data) => fetch({
    methods: 'get',
    data: data,
    url: API.User.Login
  })
}

if (env.MOCK_ENV) {
  service = {
    login: (data) => {
      return fetch({ url: MOCK_API.User.Login, data: data })
    }
  }
}
export default service
