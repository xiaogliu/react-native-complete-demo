import React, { Component } from "react";
import { Image } from "react-native";
import view from "./view";

export default class ScreenHome extends Component {
  static navigationOptions = {
    title: "TAB2",
    tabBarIcon: ({ focused }) => {
      const icon = focused ? require("../../assets/images/tab_discover_active.png") : require("../../assets/images/tab_discover.png");
      return <Image source={icon} style={{ height: 22, width: 22 }} />;
    },
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return view(this);
  }
}
