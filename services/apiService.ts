const axios = require('axios')
import localStorageUtil from '../utils/localStorageUtil'

const isProd = process.env.NODE_ENV === 'production'
axios.defaults.baseURL = isProd ? process.env.prodApiUrl : process.env.devApiUrl

const postReq = async (url: string, payload: object = {}, cancelToken:any = null, hasImage: boolean = false, auth: boolean = true) => {
  try {
    let headerConfig = {}

    if (auth) {
      const accessToken = await localStorageUtil.getItem('accessToken')
      Object.assign(headerConfig, {
        'Authorization': `Bearer ${accessToken}`
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
      console.error('Request is cancelled.')
    }

    return Promise.reject(err)
  }
}

const getReq = async (url: string, payload: object = {}, cancelToken: any = null, auth: boolean = true) => {
  try {
    let headerConfig = {}

    if (auth) {
      const accessToken = await localStorageUtil.getItem('accessToken')
      Object.assign(headerConfig, {
        'Authorization': `Bearer ${accessToken}`
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
      console.error('Request is cancelled.')
    }

    return Promise.reject(err)
  }
}

const loginReq = async (url: string, payload: object) => {
  try {
    const resp = await axios.post(`api/${url}`, payload)

    return resp.data
  } catch (err) {
    console.error(err)
    return Promise.reject(err)
  }
}

export default {
  postReq,
  getReq,
  loginReq
}
