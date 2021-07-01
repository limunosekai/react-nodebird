import * as actions from '../_actions/types';

export const initialState = {
  isLoggedIn: false,
  user: null,
  signupData: {},
  loginData: {},
};

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: { ...action.payload },
      };
    case actions.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default user_reducer;
