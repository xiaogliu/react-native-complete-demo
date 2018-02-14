import React, { Component } from 'react';
import { Image } from 'react-native';
import view from './view';

export default class ScreenTab3 extends Component {
  static navigationOptions = {
    title: 'n倍图',
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

  render() {
    return view(this);
  }
}
