import { View, Text, StyleSheet } from "react-native";
import React from "react";

const StaticGrid = () => {
  return (
    <View>
      <Text style={{ fontSize: 31 }}>Grid with static data</Text>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        <Text style={styles.item}>0SAi</Text>
        <Text style={styles.item}>0SAi</Text>
        <Text style={styles.item}>0SAi</Text>
        <Text style={styles.item}>0SAi</Text>
        <Text style={styles.item}>0SAi</Text>
        <Text style={styles.item}>0SAi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: "blue",
    color: "#fff",
    margin: 5,
    padding: 5,
    width: 120,
    height: 120,
    textAlignVertical: "center",
    textAlign: "center",
  },
});
export default StaticGrid;
