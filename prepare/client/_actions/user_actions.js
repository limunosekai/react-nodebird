import * as actions from './types';

export function loginAction(data) {
  return {
    type: actions.LOGIN,
    payload: data,
  };
}

export function logoutAction() {
  return {
    type: actions.LOGOUT,
  };
}
