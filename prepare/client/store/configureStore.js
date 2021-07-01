import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

import reducer from '../_reducers';

const configureStore = (context) => {
  return createStore(reducer);
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
