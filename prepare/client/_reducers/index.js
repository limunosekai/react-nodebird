import * as actions from '../_actions/types';

export const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signupData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          loginData: {
            id: action.payload.id,
            password: action.payload.password,
          },
        },
      };
    case actions.LOGOUT:
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false,
        },
      };
    default: {
      return {
        ...state,
      };
    }
  }
};
