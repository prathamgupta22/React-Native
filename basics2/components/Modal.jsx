import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const Modal = () => {
  return (
    <View style={styles.main}>
      <View style={styles.buttonView}></View>
      <Button title="Open Modal" />
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default Modal;
