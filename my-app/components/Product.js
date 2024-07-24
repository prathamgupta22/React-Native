import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Product = (props) => {
  const item = props.item;
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>{item.name}</Text>
      <Text style={{ fontSize: 30 }}>{item.price}</Text>
      <Text style={{ fontSize: 30 }}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Product;
