const axios = require('axios')
import { getCookie } from '../utils/cookieUtil'

const isProd = process.env.NODE_ENV === 'production'
axios.defaults.baseURL = isProd ? process.env.prodApiUrl : process.env.devApiUrl

const postReq = async (url, payload, cancelToken = null, hasImage = false, auth = true) => {
  try {
    let headerConfig = {}

    if (auth) {
      Object.assign(headerConfig, {
        'Authorization': `Bearer ${getCookie('accessToken')}`
      })
    }

    if (hasImage) {
      Object.assign(headerConfig, {
        'Content-Type': 'multipart/form-data'
      })
    }

    const resp = await axios({
      method: 'post',
      url: `api/${url}`,
      data: payload,
      headers: headerConfig,
      cancelToken: cancelToken
    })

    return resp.data
  } catch (err) {
    if (axios.isCancel(err)) {
      console.log('Request is cancelled.')
    }

    return Promise.reject(err)
  }
}

const getReq = async (url, payload = {}, cancelToken = null, auth = true) => {
  try {
    let headerConfig = {}

    if (auth) {
      Object.assign(headerConfig, {
        'Authorization': `Bearer ${getCookie('accessToken')}`
      })
    }

    const resp = await axios({
      method: 'get',
      url: `api/${url}`,
      params: payload,
      headers: headerConfig,
      cancelToken: cancelToken
    })

    return resp.data
  } catch (err) {
    if (axios.isCancel(err)) {
      console.log('Request is cancelled.')
    }

    return Promise.reject(err)
  }
}

const loginReq = async (url, payload) => {
  try {
    const resp = await axios.post(`api/${url}`, payload)

    return resp.data
  } catch (err) {
    return Promise.reject(err)
  }
}

export default {
  postReq,
  getReq,
  loginReq
}
