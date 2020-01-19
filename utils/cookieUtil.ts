import cookie from 'js-cookie'

export const setCookie = (key: string, value: string = '') => {
  if (typeof key === 'undefined' || key == null) {
    throw 'no key'
  }

  cookie.set(key, value, {
    expires: 1,
    path: '/',
  })
}

export const getCookie = (key: string) => {
  if (typeof key === 'undefined' || key == null) {
    throw 'no key'
  }

  cookie.get(key)
}

export const removeCookie = (key: string) => {
  if (typeof key === 'undefined' || key == null) {
    throw 'no key'
  }

  cookie.remove(key, {
    path: '/',
  })
}
