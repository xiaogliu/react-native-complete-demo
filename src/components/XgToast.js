/**
 * toast
 */

import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, Image, Dimensions } from 'react-native';
import pxToDp from '../config/pxToDp';

// 设备屏幕宽高
const dimensions = Dimensions.get('window');
// Toast提示框透明度
const OPACITY = 0.8;
// 显示时长
const DURATION = 2000;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    width: dimensions.width,
    height: dimensions.height,
    zIndex: 9999,
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5b5b5b',
    opacity: OPACITY,
    borderRadius: pxToDp(40),
    padding: pxToDp(20),
    width: pxToDp(280),
    height: pxToDp(220),
  },

  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: pxToDp(28),
    fontFamily: 'PingFang-SC-Regular',
  },
});

export default class XgToast extends Component {
  // 初始化 默认 props
  static defaultProps = {
    position: 'top',
    imgSrc: require('../assets/images/toast_error.png'),
  };

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      isShow: false,
      opacityAnimate: new Animated.Value(OPACITY), // 动画 值初始化
      imgSrc: require('../assets/images/toast_error.png'),
      toastTop: pxToDp(400),
    };

    // 当前显示状态
    this.isShow = false;
    // 初始化默认显示时长为SHORT
    this.duration = DURATION;
  }

  componentWillUnmount() {
    // 在页面生命周期结束时，解除定时器，避免内存泄漏
    if (this.animateTimer) {
      clearTimeout(this.animateTimer);
    }
  }

  /**
   * 显示
   */

  show(text = 'Toast', duration = 2000, type = 'succeed', toastTop = pxToDp(400)) {
    this.duration = duration;

    // 根据不同 toast 类型，加载不同提示图片
    switch (type) {
      case 'succeed':
        this.setState({ imgSrc: require('../assets/images/toast_succeed.png') });
        break;
      case 'error':
        this.setState({ imgSrc: require('../assets/images/toast_error.png') });
        break;
      default:
        break;
    }

    // 显示
    this.setState({
      text,
      toastTop,
      isShow: true,
    });
    this.isShow = true;
    this.state.opacityAnimate.setValue(OPACITY);

    // 执行隐藏操作
    this.hide();
  }

  /**
   * 隐藏
   */

  hide() {
    // 隐藏状态下不执行操作
    if (!this.isShow) {
      return;
    }
    if (this.animateTimer) {
      clearTimeout(this.animateTimer);
    }
    this.animateTimer = setTimeout(() => {
      // 开启动画
      Animated.timing(this.state.opacityAnimate, {
        toValue: 0.0,
        duration: 600,
      }).start(() => {
        // 动画结束后，初始化状态
        this.setState({
          isShow: false,
        });
        this.isShow = false;
      });
    }, this.duration);
  }

  render() {
    return this.state.isShow ? (
      <View pointerEvents="none" style={[styles.container, { top: this.state.toastTop }]}>
        <Animated.View
          style={[styles.content, this.props.contentStyle, { opacity: this.state.opacityAnimate }]}
        >
          <Image
            source={this.state.imgSrc}
            style={{ height: pxToDp(44), width: pxToDp(44), marginBottom: pxToDp(40) }}
          />
          <Text style={[styles.text, this.props.textStyle]}>{this.state.text}</Text>
        </Animated.View>
      </View>
    ) : null;
  }
}
