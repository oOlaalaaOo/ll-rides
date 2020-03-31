import Cookies from 'js-cookie';

const setCookie = (key: string, value: string = '') => {
  if (typeof key === 'undefined' || key == null) {
    throw 'no key';
  }

  Cookies.set(key, value, {
    expires: 1,
    path: '/'
  });
};

const getCookie = (key: string) => {
  if (typeof key === 'undefined' || key == null) {
    throw 'no key';
  }

  return Cookies.get(key);
};

const removeCookie = (key: string) => {
  if (typeof key === 'undefined' || key == null) {
    throw 'no key';
  }

  Cookies.remove(key, {
    path: '/'
  });
};

export default {
  setCookie,
  getCookie,
  removeCookie
};
