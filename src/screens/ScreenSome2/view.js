import React from "react";
import { View, Button, Text } from "react-native";

export default self => (
  <View>
    <Text>some2</Text>
    <Button
      title="goHome"
      onPress={() => self.navigation.navigate("ScreenHome")}
    />
  </View>
);
