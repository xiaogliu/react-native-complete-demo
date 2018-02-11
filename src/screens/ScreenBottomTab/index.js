import React from 'react';
import { TabNavigator } from 'react-navigation';
import ScreenHome from '../ScreenHome';
import ScreenTab1 from '../ScreenTab1';
import ScreenTab2 from '../ScreenTab2';
import ScreenTab3 from '../ScreenTab3';

const ScreenTab = TabNavigator(
  {
    ScreenHome: {
      screen: ScreenHome,
    },
    ScreenTab1: {
      screen: ScreenTab1,
    },
    ScreenTab2: {
      screen: ScreenTab2,
    },
    ScreenTab3: {
      screen: ScreenTab3,
    },
  },
  {
    tabBarPosition: 'bottom',
  },
);

export default ScreenTab;
