import React from "react";
import { StackNavigator } from "react-navigation";

// 路由文件
import ScreenHome from "../screens/ScreenHome";
import ScreenSome1 from "../screens/ScreenSome1";
import ScreenSome2 from "../screens/ScreenSome2";

const StackModalNavigator = (routeConfigs, navigatorConfig) => {
  const CardStackNavigator = StackNavigator(routeConfigs, navigatorConfig);
  const modalRouteConfig = {};
  const routeNames = Object.keys(routeConfigs);

  for (let i = 0; i < routeNames.length; i++) {
    modalRouteConfig[`${routeNames[i]}Modal`] = routeConfigs[routeNames[i]];
  }

  const ModalStackNavigator = StackNavigator(
    {
      CardStackNavigator: { screen: CardStackNavigator },
      ...modalRouteConfig
    },
    {
      mode: "modal",
      headerMode: "none"
    }
  );

  return ModalStackNavigator;
};

const AppNavigator = StackModalNavigator(
  {
    ScreenHome: {
      screen: ScreenHome
    },
    ScreenSome1: {
      screen: ScreenSome1
    },
    ScreenSome2: {
      screen: ScreenSome2
    }
  },
  { initialRouteName: "ScreenHome", headerMode: "screen" }
);

export default () => <AppNavigator />;
