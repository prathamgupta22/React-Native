import { View, Text, StyleSheet, Image, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./Redux/action";

const Product = (props) => {
  const item = props.item;
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>{item.name}</Text>
      <Text style={{ fontSize: 30 }}>{item.price}</Text>
      <Text style={{ fontSize: 30 }}>{item.color}</Text>
      <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
      <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    borderBlockColor: "orange",
    borderBottomWidth: 2,
    padding: 10,
  },
});

export default Product;
