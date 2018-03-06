import React from 'react';
import { View, Button, Text } from 'react-native';
import pxToDp from '../../config/pxToDp';

export default self => (
  <View>
    <Text style={{ fontSize: pxToDp(36) }}>home</Text>
    {/* ScreenSome2 从屏幕右侧进入 */}
    <Button title="goSome1" onPress={() => self.navigation.navigate('ScreenSome1')} />

    {/* ScreenSome2 从屏幕下面进入 */}
    <Button title="goSome2Modal" onPress={() => self.navigation.navigate('ScreenSome2Modal')} />

    {/* 跳转 H5 页面 */}
    <Button
      title="webView"
      onPress={() =>
        self.navigation.navigate('ScreenWebView', {
          url: 'https://github.com/facebook/react-native',
          title: '加载中...',
        })
      }
    />

    {/* 网络状态，一般没有网络连接时提示用户 */}
    <Text style={{ width: '100%', textAlign: 'center', marginTop: 20 }}>
      当前网络：{self.props.userInfo.connectNetType}
    </Text>
  </View>
);
