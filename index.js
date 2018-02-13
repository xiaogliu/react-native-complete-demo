import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import store from './src/redux/store';

const ReduxApp = () => (
  // 配置 Provider 为根组件，同时传入 store 作为其属性
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('AwesomeProject', () => ReduxApp);
