import * as actions from './types';

export function loginRequestAction(data) {
  return {
    type: actions.LOGIN_REQUEST,
    payload: data,
  };
}

export function logoutRequestAction() {
  return {
    type: actions.LOGOUT_REQUEST,
  };
}

export function signUpRequestAction(data) {
  return {
    type: actions.SIGNUP_REQUEST,
    payload: data,
  };
}
