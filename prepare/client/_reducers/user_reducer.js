import * as actions from '../_actions/types';

export const initialState = {
  isLoggingIn: false, // 로그인 시도중
  isLoggingInError: null, // 로그인 실패
  isLoggingOut: false, // 로그아웃 시도중
  isLoggingOutError: null, // 로그아웃 실패
  isLoggedIn: false, // 로그인 완료
  isSigningUp: false, // 회원가입 시도중
  isSigningUpError: null, // 회원가입 실패
  isSignedUp: false, // 회원가입 완료
  me: null,
  signupData: {},
  loginData: {},
};

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: true,
        isLoggingInError: null,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: {
          ...action.payload,
          nickname: 'limu',
          email: 'powe@weew.com',
          Posts: [],
          Followings: [],
          Followers: [],
        },
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        isLoggingInError: action.error,
      };
    case actions.LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        isLoggingOutError: null,
      };
    case actions.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null,
      };
    case actions.LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        isLoggingOutError: action.error,
      };
    case actions.SIGNUP_REQUEST:
      return {
        ...state,
        isSignedUp: false,
        isSigningUp: true,
        isSigningUpError: null,
      };
    case actions.SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: true,
        // signupData: action.data,
      };
    case actions.SIGNUP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        isSigningUpError: action.error,
      };
    default:
      return state;
  }
};

export default user_reducer;
