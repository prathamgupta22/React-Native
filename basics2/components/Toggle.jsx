import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Toggle = () => {
  const [show, setShow] = useState(false);
  return (
    <View>
      <Text>Toggle</Text>
      <Button title="Toggle button" onPress={() => setShow(!show)} />
      {show ? <User /> : null}
    </View>
  );
};

const User = () => {
  return <Text style={{ fontSize: 30, color: "green" }}>User Component</Text>;
};

export default Toggle;
