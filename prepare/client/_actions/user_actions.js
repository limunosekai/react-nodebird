import * as actions from './types';

export function loginAction(id, password) {
  return {
    type: actions.LOGIN,
    payload: {
      id,
      password,
    },
  };
}

export function logoutAction() {
  return {
    type: actions.LOGOUT,
  };
}
