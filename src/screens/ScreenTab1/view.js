import React from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import styles from './style';

// 引入 toast 组件
import XgToast from '../../components/XgToast';

export default self => (
  <View style={{ alignItems: 'center' }}>
    <Text style={{ fontSize: 24 }}>历史上的今天</Text>

    {/* 查询 start */}
    <TextInput
      style={[styles.input]}
      placeholder="month"
      onChangeText={text => self.setState({ inputMonthText: text })}
    />
    <TextInput
      style={[styles.input]}
      placeholder="day"
      onChangeText={text => self.setState({ inputDayText: text })}
    />
    <Button title="查询" onPress={() => self.getTodayOnHistoryInfo()} />
    {/* 查询 end */}

    {/* 展示查询数据 */}
    <Text>
      发生了啥事：{self.state.todayOnHistoryInfo.result
        ? self.state.todayOnHistoryInfo.result[0].des
        : '暂无数据'}
    </Text>

    {/* 自定义 toast 组件 */}
    <XgToast
      ref={(element) => {
        self.xgToast = element;
      }}
    />
  </View>
);
