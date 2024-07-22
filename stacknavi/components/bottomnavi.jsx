import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Text, TextInput, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />

        <Tab.Screen name="SignUp" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// const HomeScreen = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Hello Screen</Text>
//     </View>
//   );
// };

// const Headerr = () => {
//   return <TextInput placeholder="name" />;
// };

const Login = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Screen</Text>
      {/* <Button
        title="Go to home page"
        onPress={() => props.navigation.navigate("Home")}
      /> */}
    </View>
  );
};
const SignUp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Signup Screen</Text>
      {/* <Button
        title="Go to home page"
        onPress={() => props.navigation.navigate("Home")}
      /> */}
    </View>
  );
};
