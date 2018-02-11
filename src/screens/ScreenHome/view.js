import React from 'react';
import { View, Button, Text } from 'react-native';

export default self => (
  <View>
    <Text style={{ fontSize: 36 }}>home</Text>
    <Button title="goSome1" onPress={() => self.navigation.navigate('ScreenSome1')} />
  </View>
);
