import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
  userInfo: {
    name: '小光',
    gender: '男',
  },
};

const store = createStore(reducers, initialState);

export default store;
