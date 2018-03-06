import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyWeb extends Component {
  // 设置头部导航
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    headerBackTitle: null,
    headerBackTitleStyle: {
      color: '#f6f6f6',
    },
  });

  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return (
      <WebView
        source={{ uri: this.navigation.state.params.url }}
        startInLoadingState
        // 加载完成后设置标题
        onLoadEnd={() => this.navigation.setParams({ title: '标题' })}
        onError={() => console.log('加载失败')}
      />
    );
  }
}
