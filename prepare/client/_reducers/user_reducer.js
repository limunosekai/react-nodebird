import * as actions from '../_actions/types';
import produce from 'immer';

export const initialState = {
  isLoggingIn: false, // 로그인 시도중
  isLoggingInError: null, // 로그인 실패
  isLoggingOut: false, // 로그아웃 시도중
  isLoggingOutError: null, // 로그아웃 실패
  isLoggedIn: false, // 로그인 완료
  isSigningUp: false, // 회원가입 시도중
  isSigningUpError: null, // 회원가입 실패
  isSignedUp: false, // 회원가입 완료
  isChangingNickname: false, // 닉네임 변경 시도중
  isChangingNicknameError: null, // 닉네임 변경 실패
  isChangedNickname: false, // 닉네임 변경 완료
  me: null,
  signupData: {},
  loginData: {},
};

const dummyUser = (data) => ({
  ...data,
  nickname: 'limu',
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [{ nickname: '뚜비' }, { nickname: '보라돌이' }],
  Followers: [{ nickname: '뚜비' }, { nickname: '보라돌이' }],
});

const user_reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actions.LOGIN_REQUEST:
        draft.isLoggedIn = false;
        draft.isLoggingIn = true;
        draft.isLoggingInError = null;
        break;
      case actions.LOGIN_SUCCESS:
        draft.isLoggingIn = false;
        draft.isLoggedIn = true;
        draft.me = dummyUser(action.data);
        break;
      case actions.LOGIN_FAILURE:
        draft.isLoggedIn = false;
        draft.isLoggingIn = false;
        draft.isLoggingInError = action.error;
        break;
      case actions.LOGOUT_REQUEST:
        draft.isLoggingOut = true;
        draft.isLoggingOutError = null;
        break;
      case actions.LOGOUT_SUCCESS:
        draft.isLoggingOut = false;
        draft.isLoggedIn = false;
        draft.me = null;
        break;
      case actions.LOGOUT_FAILURE:
        draft.isLoggingOut = false;
        draft.isLoggingOutError = action.error;
        break;
      case actions.SIGNUP_REQUEST:
        draft.isSignedUp = false;
        draft.isSigningUp = true;
        draft.isSigningUpError = null;
        break;
      case actions.SIGNUP_SUCCESS:
        draft.isSigningUp = false;
        draft.isSignedUp = true;
        break;
      case actions.SIGNUP_FAILURE:
        draft.isSigningUp = false;
        draft.isSigningUpError = action.error;
        break;
      case actions.CHANGE_NICKNAME_REQUEST:
        draft.isChangedNickname = false;
        draft.isChangingNickname = true;
        draft.isChangingNicknameError = null;
        break;
      case actions.CHANGE_NICKNAME_SUCCESS:
        draft.isChangedNickname = true;
        draft.isChangingNickname = false;
        break;
      case actions.CHANGE_NICKNAME_FAILURE:
        draft.isChangingNickname = false;
        draft.isChangingNicknameError = action.error;
        break;
      case actions.ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data });
        break;
      case actions.REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((i) => i.id !== action.data);
        break;
      default:
        break;
    }
  });
};

export default user_reducer;
