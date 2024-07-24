import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";

export default function Index() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const saveData = async () => {
    let isValid = true;

    if (!name) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }

    if (!age) {
      setAgeError(true);
      isValid = false;
    } else {
      setAgeError(false);
    }

    if (!email) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (!isValid) {
      return;
    }

    const url = "http://10.0.2.2:3000/users"; // Corrected IP address
    let result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, age }),
    });

    let json = await result.json();
    if (json) {
      console.warn("Data is added");
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 30 }}>POST API with Input Field data</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {nameError ? (
        <Text style={styles.errorText}>Please enter a valid name</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Enter age"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      {ageError ? (
        <Text style={styles.errorText}>Please enter a valid age</Text>
      ) : null}

      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {emailError ? (
        <Text style={styles.errorText}>Please enter a valid email</Text>
      ) : null}

      <Button title="Save Data" onPress={saveData} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 20,
    borderColor: "skyblue",
    borderWidth: 1,
    fontSize: 20,
    marginBottom: 5,
  },
  errorText: {
    color: "red",
    marginLeft: 20,
  },
});
