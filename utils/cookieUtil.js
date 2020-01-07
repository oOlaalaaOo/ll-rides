import cookie from 'js-cookie'

const setCookie = (key, value = '') => {
  if (typeof key === 'undefined' || key == null) {
    throw 'no key'
  }

  cookie.set(key, value, {
    expires: 1,
    path: '/',
    domain: 'http://localhost:3000/'
  })
}

const getCookie = (key) => {
  if (typeof key === 'undefined' || key == null) {
    throw 'no key'
  }

  cookie.get(key)
}

const removeCookie = (key) => {
  if (typeof key === 'undefined' || key == null) {
    throw 'no key'
  }

  cookie.remove(key, {
    path: '/',
    domain: 'http://localhost:3000/'
  })
}

export default {
  setCookie,
  getCookie,
  removeCookie
}
