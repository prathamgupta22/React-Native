import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useNavigation } from "expo-router";

const index = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Link
        href={"/login"}
        style={{ textDecorationLine: "underline", fontSize: 30 }}
      >
        LOGIN
      </Link> */}

      <TouchableOpacity
        style={{ width: "90%", height: 50, backgroundColor: "red" }}
        onPress={() => navigation.navigate("(tabs)")}
      >
        <Text style={{ color: "white", fontSize: 30 }}>Go to login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
