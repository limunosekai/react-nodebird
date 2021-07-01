import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user_reducer';
import post from './post_reducer';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      // 서버에서 실행된 결과물이 HYDRATE 액션으로 전달
      case HYDRATE:
        console.log('HYDRATE', action.payload);
        return {
          ...state,
          ...action.payload,
        };
      // reducer 초기화 시 필요
      default: {
        return {
          ...state,
        };
      }
    }
  },
  user,
  post,
});

export default rootReducer;
