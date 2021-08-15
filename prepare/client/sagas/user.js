import { all, fork, delay, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../_actions/types';

function loginAPI(data) {
  return axios.post('/api/login', data);
}

// action 자체를 받아올 수 있다
function* login(action) {
  try {
    // const result = yield call(loginAPI, action.payload);
    yield delay(1000);
    yield put({
      type: actions.LOGIN_SUCCESS,
      // data: result.data,
      data: action.payload,
    });
  } catch (err) {
    yield put({
      type: actions.LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

function logoutAPI() {
  return axios.post('/api/logout');
}

function* logout(action) {
  try {
    // const result = yield call(logoutAPI);
    yield delay(1000);
    yield put({
      type: actions.LOGOUT_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: actions.LOGOUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI() {
  return axios.post('/api/logout');
}

function* signUp(action) {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: actions.SIGNUP_SUCCESS,
      // data: result.data,
      data: action.payload,
    });
  } catch (err) {
    yield put({
      type: actions.SIGNUP_FAILURE,
      error: err.response.data,
    });
  }
}

function changeNicknameAPI() {
  return axios.post('/api/logout');
}

function* changeNickname(action) {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: actions.CHANGE_NICKNAME_SUCCESS,
      // data: result.data,
      data: action.payload,
    });
  } catch (err) {
    yield put({
      type: actions.CHANGE_NICKNAME_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(actions.LOGIN_REQUEST, login);
}

function* watchLogout() {
  yield takeLatest(actions.LOGOUT_REQUEST, logout);
}

function* watchSignUp() {
  yield takeLatest(actions.SIGNUP_REQUEST, signUp);
}

function* watchChangeNickname() {
  yield takeLatest(actions.SIGNUP_REQUEST, changeNickname);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchSignUp),
    fork(watchChangeNickname),
  ]);
}
