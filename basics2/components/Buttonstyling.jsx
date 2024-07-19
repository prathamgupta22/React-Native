import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";

const Buttonstyling = () => {
  return (
    <View>
      <Pressable>
        <Text onPress={func()} style={styles.button}>
          Button
        </Text>
      </Pressable>
    </View>
  );
};
function func() {
  console.warn("Hello");
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  button: {
    backgroundColor: "red",
    color: "black",
    fontSize: 24,
    textAlign: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: "black",
    elevation: 10,
    shadowOpacity: 1,
  },
});

export default Buttonstyling;
