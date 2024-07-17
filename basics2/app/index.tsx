import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Index() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);

  return (
    <View>
      <Text style={{ fontSize: 20 }}>SIMPLE FORM IN REACT NATIVE</Text>

      <TextInput
        style={styles.textbox}
        placeholder="Enter your name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.textbox}
        placeholder="Enter your email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.textbox}
        secureTextEntry={true}
        placeholder="Enter your password"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <View style={{ marginBottom: 10 }}>
        <Button title="Print Details" onPress={() => setDisplay(true)} />
      </View>
      <View>
        {display && (
          <View>
            <Text>Username is: {name}</Text>
            <Text>Email is: {email}</Text>
            <Text>Password is: {password}</Text>
          </View>
        )}
      </View>
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
