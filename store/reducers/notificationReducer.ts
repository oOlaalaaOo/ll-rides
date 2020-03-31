import {
  PUSH_NOTIFICATION,
  SHIFT_NOTIFICATION,
  CLEAR_NOTIFICATIONS
} from '../types';

interface InitState {
  notifications: any[];
}

const initState: InitState = {
  notifications: []
};

interface Action {
  type: string;
  payload?: object;
}

export default (state = initState, action: Action) => {
  let notifications: any[] = [...state.notifications];

  switch (action.type) {
    case PUSH_NOTIFICATION:
      notifications.push(action.payload);

      return Object.assign({}, state, {
        notifications: [...notifications]
      });

    case SHIFT_NOTIFICATION:
      notifications.shift();

      return Object.assign({}, state, {
        notifications: [...notifications]
      });

    case CLEAR_NOTIFICATIONS:
      notifications = [];

      return Object.assign(
        {},
        {
          notifications: notifications
        }
      );

    default:
      return state;
  }
};
