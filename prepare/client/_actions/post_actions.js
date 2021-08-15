import * as actions from './types';

export function addPostReqeust(data) {
  return {
    type: actions.ADD_POST_REQUEST,
    payload: data,
  };
}

export function addCommentReqeust(data) {
  return {
    type: actions.ADD_COMMENT_REQUEST,
    payload: data,
  };
}

export function removePostRequest(data) {
  return {
    type: actions.REMOVE_POST_REQUEST,
    payload: data,
  };
}
