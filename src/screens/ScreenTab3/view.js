import React from 'react';
import { View, Text, Image } from 'react-native';
import pxToDp from '../../config/pxToDp';

export default self => (
  <View>
    <Text style={{ fontSize: pxToDp(36) }}>测试自动加载不同分辨率图片</Text>
    <Image
      source={require('../../assets/images/test.png')}
      style={{ height: pxToDp(80), width: pxToDp(80) }}
    />
  </View>
);
