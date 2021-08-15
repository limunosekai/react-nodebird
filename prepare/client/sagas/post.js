import { all, delay, put, takeLatest, call, fork } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../_actions/types';

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.payload);
    yield delay(1000);
    yield put({
      type: actions.ADD_POST_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: actions.ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.payload);
    yield delay(1000);
    yield put({
      type: actions.ADD_COMMENT_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: actions.ADD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(actions.ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
  yield takeLatest(actions.ADD_POST_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
