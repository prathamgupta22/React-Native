import { View, Text, StatusBar } from "react-native";
import React from "react";

const StatusB = () => {
  return (
    <View>
      <Text>Hello</Text>
      <StatusBar backgroundColor="orange" barStyle="default" hidden={false} />
    </View>
  );
};

export default StatusB;
