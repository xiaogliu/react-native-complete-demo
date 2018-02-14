import React, { Component } from 'react';
import { Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import view from './view';

export default class ScreenHome extends Component {
  static navigationOptions = {
    title: '首页',
    tabBarIcon: ({ focused }) => {
      const icon = focused
        ? require('../../assets/images/tab_home_active.png')
        : require('../../assets/images/tab_home.png');
      return <Image source={icon} style={{ height: 22, width: 22 }} />;
    },
  };

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }
  componentDidMount() {
    // 隐藏启动页
    SplashScreen.hide();
  }
  render() {
    return view(this);
  }
}
