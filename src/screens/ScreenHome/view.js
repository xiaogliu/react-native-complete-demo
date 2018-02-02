import React from "react";
import { View, Button, Text } from "react-native";

export default self => (
  <View>
    <Text>home</Text>
    <Button title="goSome1" onPress={() => self.navigation.navigate("ScreenSome1")} />
  </View>
);
