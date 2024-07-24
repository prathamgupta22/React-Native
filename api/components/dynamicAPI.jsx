import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const saveAPIData = async () => {
    const data = {
      name: "Sam",
      age: 34,
      email: "sam@email.com",
    };

    const url = "http://10.0.2.:3000/users";
    let result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let json = result.json();
    console.warn(json);
  };

  return (
    <View>
      <Text>POST API CALL</Text>
      <Button title="Save Data" onPress={saveAPIData} />
    </View>
  );
}
