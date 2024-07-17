import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Index() {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={{ fontSize: 30 }}>ENTER SOME TEXT</Text>
      <Text style={{ fontSize: 30 }}>Intput text is : ${name}</Text>
      <TextInput
        value={name}
        placeholder="enter your text"
        style={styles.textbox}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Clear it" onPress={() => setName("")} />
    </View>
  );
}

const styles = StyleSheet.create({
  textbox: {
    fontSize: 30,
    color: "blue",
    borderWidth: 2,
    borderColor: "blue",
    margin: 10,
  },
});
