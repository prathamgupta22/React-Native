import { View, Text, SectionList } from "react-native";
import React from "react";

const SectionL = () => {
  const users = [
    {
      id: 1,
      name: "Anil",
      data: ["PHP", "REACT JS", "ANGULAR"],
    },
    {
      id: 2,
      name: "sahil",
      data: ["PHP", " JS", "ANGULAR"],
    },
    {
      id: 3,
      name: "sharma",
      data: ["PHP", "Java", "ANGULAR"],
    },
    {
      id: 4,
      name: "kannu",
      data: ["PHP", "node", "ANGULAR"],
    },
  ];
  return (
    <View>
      <Text style={{ fontSize: 30 }}>SectionList IN REACT NATIVE</Text>
      <SectionList
        sections={users}
        renderItem={({ item }) => <Text style={{ fontSize: 20 }}> {item}</Text>}
        renderSectionHeader={({ section: { name } }) => (
          <Text style={{ fontSize: 25, color: "red" }}>{name}</Text>
        )}
      />
    </View>
  );
};

export default SectionL;
