import axios from 'axios';
import cookieUtil from '../utils/cookieUtil';

const isProd = process.env.NODE_ENV === 'production';

axios.defaults.baseURL = isProd
  ? process.env.prodApiUrl
  : process.env.devApiUrl;

const postReq = async (
  url: string,
  payload: object = {},
  cancelToken: any = null,
  hasImage: boolean = false,
  auth: boolean = true
) => {
  try {
    let headerConfig = {};

    if (auth) {
      const accessToken = cookieUtil.getCookie('accessToken');

      Object.assign(headerConfig, {
        Authorization: `Bearer ${accessToken}`
      });
    }

    if (hasImage) {
      Object.assign(headerConfig, {
        'Content-Type': 'multipart/form-data'
      });
    }

    const resp = await axios({
      method: 'post',
      url: url,
      data: payload,
      headers: headerConfig,
      cancelToken: cancelToken
    });

    return resp.data;
  } catch (err) {
    if (axios.isCancel(err)) {
      console.error('Request is cancelled.');
    }

    return Promise.reject(err);
  }
};

const getReq = async (
  url: string,
  payload: object = {},
  cancelToken: any = null,
  auth: boolean = true
) => {
  try {
    let headerConfig = {};

    if (auth) {
      const accessToken = cookieUtil.getCookie('accessToken');
      Object.assign(headerConfig, {
        Authorization: `Bearer ${accessToken}`
      });
    }

    const resp = await axios({
      method: 'get',
      url: url,
      params: payload,
      headers: headerConfig,
      cancelToken: cancelToken
    });

    return resp.data;
  } catch (err) {
    if (axios.isCancel(err)) {
      console.error('Request is cancelled.');
    }

    return Promise.reject(err);
  }
};

const putReq = async (
  url: string,
  payload: object = {},
  cancelToken: any = null,
  auth: boolean = true
) => {
  try {
    let headerConfig = {};

    if (auth) {
      const accessToken = cookieUtil.getCookie('accessToken');
      Object.assign(headerConfig, {
        Authorization: `Bearer ${accessToken}`
      });
    }

    const resp = await axios({
      method: 'put',
      url: url,
      params: payload,
      headers: headerConfig,
      cancelToken: cancelToken
    });

    return resp.data;
  } catch (err) {
    if (axios.isCancel(err)) {
      console.error('Request is cancelled.');
    }

    return Promise.reject(err);
  }
};

const deleteReq = async (
  url: string,
  payload: object = {},
  cancelToken: any = null,
  auth: boolean = true
) => {
  try {
    let headerConfig = {};

    if (auth) {
      const accessToken = cookieUtil.getCookie('accessToken');
      Object.assign(headerConfig, {
        Authorization: `Bearer ${accessToken}`
      });
    }

    const resp = await axios({
      method: 'delete',
      url: url,
      params: payload,
      headers: headerConfig,
      cancelToken: cancelToken
    });

    return resp.data;
  } catch (err) {
    if (axios.isCancel(err)) {
      console.error('Request is cancelled.');
    }

    return Promise.reject(err);
  }
};

const loginReq = async (url: string, payload: object) => {
  try {
    const resp = await axios.post(`${url}`, payload);

    return resp.data;
  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
};

const getUserReq = async (url: string, accessToken: string) => {
  try {
    let headerConfig = {};

    Object.assign(headerConfig, {
      Authorization: `Bearer ${accessToken}`
    });

    const resp = await axios({
      method: 'get',
      url: url,
      params: {},
      headers: headerConfig
    });

    return resp.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export default {
  postReq,
  getReq,
  putReq,
  deleteReq,
  loginReq,
  getUserReq
};
