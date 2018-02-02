import React from "react";
import { StackNavigator } from "react-navigation";

// 路由文件
import ScreenHome from "../screens/ScreenHome";
import ScreenSome1 from "../screens/ScreenSome1";

// 设置路由
const AppNavigator = StackNavigator(
  {
    ScreenHome: {
      screen: ScreenHome
    },
    ScreenSome1: {
      screen: ScreenSome1

    },
  },
  { initialRouteName: "ScreenHome", headerMode: "screen" }
);

export default () => <AppNavigator />;
