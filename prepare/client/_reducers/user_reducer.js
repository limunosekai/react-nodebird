import * as actions from '../_actions/types';

export const initialState = {
  isLoggedIn: false,
  me: null,
  signupData: {},
  loginData: {},
};

const user_reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        me: action.payload,
      };
    case actions.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};

export default user_reducer;
