import {
  PUSH_NOTIFICATION,
  SHIFT_NOTIFICATION,
  CLEAR_NOTIFICATIONS
} from '../types';

export const pushNotification = ({
  type = 'success',
  message = '',
  duration = 5000
}) => {
  return {
    type: PUSH_NOTIFICATION,
    payload: {
      type: type,
      message: message,
      duration: duration
    }
  };
};

export const shiftNotification = () => {
  return {
    type: SHIFT_NOTIFICATION
  };
};

export const clearNotifications = () => {
  return {
    type: CLEAR_NOTIFICATIONS
  };
};
