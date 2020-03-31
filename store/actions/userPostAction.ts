import { SET_USER_POSTS } from '../types';

export const setUserPosts = (datas: Array<any> = []) => {
  return {
    type: SET_USER_POSTS,
    payload: {
      datas: datas
    }
  };
};
