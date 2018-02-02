import React from "react";
import { View, Button, Text } from "react-native";

export default self => (
  <View>
    <Text>home</Text>
    <Button title="goHome" onPress={() => self.navigation.navigate("ScreenHome")} />
  </View>
);
