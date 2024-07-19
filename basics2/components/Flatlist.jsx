import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

const users = [
  {
    id: 1,
    name: "Anil",
  },
  {
    id: 2,
    name: "sahil",
  },
  {
    id: 3,
    name: "sharma",
  },
  {
    id: 4,
    name: "kannu",
  },
];

const Index = () => {
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center" }}>
        List with flatlist component
      </Text>
      <FlatList
        // style={styles.container}
        data={users}
        renderItem={({ item }) => (
          <Text style={styles.container}>{item.name}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 24,
    padding: 20,
    color: "#fff",
    backgroundColor: "blue",
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
  },
});

export default Index;
