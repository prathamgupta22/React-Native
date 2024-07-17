import React from "react";
import { Button, Text, View } from "react-native";
import Details from "../components/Details";

// Define the age and email constants
const age = 39;
const email = "p@email.com";

// Define the fruit function
function fruit() {
  return "apple";
}

// Define the Index component
export default function Index() {
  const name = "PG";
  return (
    <View>
      <Text>{name}</Text>
      <Button title={`${age}`} onPress={() => {}} />
      <Text>{email}</Text>
      <Text>{fruit()}</Text>
      <Details />
    </View>
  );
}
