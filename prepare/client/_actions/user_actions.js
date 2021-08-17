import * as actions from './types';

export function loginRequestAction(data) {
  return {
    type: actions.LOGIN_REQUEST,
    payload: data,
  };
}

export function unfollowRequestAction(id) {
  return {
    type: actions.UNFOLLOW_REQUEST,
    payload: id,
  };
}

export function followRequestAction(id) {
  return {
    type: actions.FOLLOW_REQUEST,
    payload: id,
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
