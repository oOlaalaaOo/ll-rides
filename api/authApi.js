import apiServices from '../services/apiServices'

const login = async (email, password) => {
  try {
    let payload = {
      email: email,
      password: password
    }

    const resp = await apiServices.loginReq('user/login', payload)

    return resp
  } catch (err) {
    return Promise.reject(err)
  }
}

const register = async (email, password, name) => {
  try {
    let payload = {
      email: email,
      password: password,
      name: name
    }

    const resp = await apiServices.postReq('user/register', payload, null, false, false)

    return resp
  } catch (err) {
    return Promise.reject(err)
  }
}

export default {
  login,
  register
}
