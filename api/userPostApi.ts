import apiService from '../services/apiService';

const getUserPosts = async (): Promise<any> => {
  try {
    const resp = await apiService.getReq('user/post');

    return resp;
  } catch (err) {
    return Promise.reject(err);
  }
};

const getUserPost = async (id: number): Promise<any> => {
  try {
    const resp = await apiService.getReq(`user/post/${id}`);

    return resp;
  } catch (err) {
    return Promise.reject(err);
  }
};

const storeUserPost = async (
  userId: number,
  title: string,
  description: string = ''
): Promise<any> => {
  try {
    let payload: any = {
      user_id: userId,
      title: title,
      description: description
    };

    const resp = await apiService.postReq(`user/post`, payload);

    return resp;
  } catch (err) {
    return Promise.reject(err);
  }
};

const updateUserPost = async (
  id: number,
  userId: number,
  title: string,
  description: string = ''
): Promise<any> => {
  try {
    let payload: any = {
      user_id: userId,
      title: title,
      description: description
    };

    const resp = await apiService.putReq(`user/post/${id}`, payload);

    return resp;
  } catch (err) {
    return Promise.reject(err);
  }
};

const destroyUserPost = async (id: number): Promise<any> => {
  try {
    const resp = await apiService.putReq(`user/post/${id}`);

    return resp;
  } catch (err) {
    return Promise.reject(err);
  }
};

export default {
  getUserPosts,
  getUserPost,
  storeUserPost,
  updateUserPost,
  destroyUserPost
};
