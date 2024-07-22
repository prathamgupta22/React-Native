import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, TextInput, View } from "react-native";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Button title="Left" />,
            // headerRight: () => <Button title="Right" />,

            headerRight: () => <Headerr />,
            title: "User Login",
            headerStyle: {
              backgroundColor: "orange",
            },
            headerBackTitleStyle: {
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello Screen</Text>
    </View>
  );
};

const Headerr = () => {
  return <TextInput placeholder="name" />;
};

const Login = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to home page"
        onPress={() => props.navigation.navigate("Home")}
      />
    </View>
  );
};
