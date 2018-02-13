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
  </View>
);
