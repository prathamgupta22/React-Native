import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const Login = () => {
  return (
    <View>
      <Image
        source={require("./../assets/images/Loginpage.jpeg")}
        style={{ width: "100%", height: "40%" }}
      />

      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          Ai Travel Planner
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "outfit",
            textAlign: "center",
            color: Colors.GRAY,
          }}
        >
          Discover you next adventure effortlessly. Personalized itenaries at
          your fingertips. Travel smarter with AI-driven insights .
        </Text>

        <View style={styles.button}>
          <Text>Sign In With Google</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    padding: 15,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.dark,
    borderRadius: 99,
  },
});

export default Login;
