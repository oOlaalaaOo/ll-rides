import apiService from '../services/apiService'

const login = async (email: string, password: string): Promise<any> => {
  try {
    let payload = {
      email: email,
      password: password
    }

    const resp = await apiService.loginReq('user/login', payload)

    return resp
  } catch (err) {
    return Promise.reject(err)
  }
}

const register = async (email: string, password: string, name: string): Promise<any>  => {
  try {
    let payload = {
      email: email,
      password: password,
      name: name
    }

    const resp = await apiService.postReq('user/register', payload, null, false, false)

    return resp
  } catch (err) {
    return Promise.reject(err)
  }
}

export default {
  login,
  register
}
