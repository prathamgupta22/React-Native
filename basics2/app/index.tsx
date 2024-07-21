import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Pressablee from "../components/Pressablee";
import { View } from "react-native";

const Index = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pressablee />
    </View>
  );
};

export default Index;
