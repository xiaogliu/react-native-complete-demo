import React from 'react';
import { View, Text, Button } from 'react-native';
import pxToDp from '../../config/pxToDp';

export default self => (
  <View>
    <Text style={{ fontSize: pxToDp(36) }}>我的名字是：{self.props.userInfo.name}</Text>
    <Text style={{ fontSize: pxToDp(36) }}>我的性别是：{self.props.userInfo.gender}</Text>
    <Button title="改变名字" onPress={() => self.changeReduxStore({ name: 'vince' })} />
    <Button title="改变性别" onPress={() => self.changeReduxStore({ gender: '女' })} />
    <Button title="还原" onPress={() => self.changeReduxStore({ name: '小光', gender: '男' })} />
  </View>
);
