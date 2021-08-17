import {
  all,
  delay,
  put,
  takeLatest,
  call,
  fork,
  throttle,
} from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../_actions/types';
import shortid from 'shortid';
import { generateDummyPost } from '../_reducers/post_reducer';

function loadPostsAPI(data) {
  return axios.get('/api/post', data);
}

function* loadPosts() {
  try {
    // const result = yield call(addPostAPI, action.payload);
    yield delay(1000);
    yield put({
      type: actions.LOAD_POSTS_SUCCESS,
      data: generateDummyPost(10),
    });
  } catch (err) {
    yield put({
      type: actions.LOAD_POSTS_FAILURE,
      error: err,
    });
  }
}

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.payload);
    yield delay(1000);
    const id = shortid.generate();
    yield put({
      type: actions.ADD_POST_SUCCESS,
      data: {
        id,
        content: action.payload,
      },
    });
    yield put({
      type: actions.ADD_POST_TO_ME,
      data: id,
    });
  } catch (err) {
    yield put({
      type: actions.ADD_POST_FAILURE,
      error: err,
    });
  }
}

function removePostAPI(data) {
  return axios.post('/api/post', data);
}

function* removePost(action) {
  try {
    // const result = yield call(addPostAPI, action.payload);
    yield delay(1000);
    yield put({
      type: actions.REMOVE_POST_SUCCESS,
      data: action.payload,
    });
    yield put({
      type: actions.REMOVE_POST_OF_ME,
      data: action.payload,
    });
  } catch (err) {
    yield put({
      type: actions.REMOVE_POST_FAILURE,
      error: err,
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
      data: action.payload,
    });
  } catch (err) {
    yield put({
      type: actions.ADD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadPosts() {
  yield throttle(5000, actions.LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
  yield takeLatest(actions.ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield takeLatest(actions.REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
  yield takeLatest(actions.ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([
    fork(watchLoadPosts),
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchRemovePost),
  ]);
}
