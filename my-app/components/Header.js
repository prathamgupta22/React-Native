import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontsize: 30,
          textAlign: "center",
          padding: 10,
          backgroundColor: "orange",
        }}
      >
        Header
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Header;
