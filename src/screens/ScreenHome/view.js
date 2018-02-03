import React from "react";
import { View, Button, Text } from "react-native";

export default self => (
  <View>
    <Text>home</Text>
    <Button
      title="goSome1"
      onPress={() => self.navigation.navigate("ScreenSome1")}
    />
    <Button
      title="goSome2"
      onPress={() => self.navigation.navigate("ScreenSome2Modal")}
    />
  </View>
);
