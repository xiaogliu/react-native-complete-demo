// 引入依赖
import React from 'react';
import { StackNavigator } from 'react-navigation';

// 引入页面组件
import ScreenBottomTab from '../screens/ScreenBottomTab';
import ScreenHome from '../screens/ScreenHome';
import ScreenSome1 from '../screens/ScreenSome1';
import ScreenTab1 from '../screens/ScreenTab1';
import ScreenTab2 from '../screens/ScreenTab2';
import ScreenTab3 from '../screens/ScreenTab3';

// 配置路由
const AppNavigator = StackNavigator({
  ScreenBottomTab: {
    screen: ScreenBottomTab,
  },
  ScreenHome: {
    screen: ScreenHome,
  },
  ScreenSome1: {
    screen: ScreenSome1,
  },
  ScreenTab2: {
    screen: ScreenTab2,
  },
  ScreenTab1: {
    screen: ScreenTab1,
  },
  ScreenTab3: {
    screen: ScreenTab3,
  },
});

export default () => <AppNavigator />;
