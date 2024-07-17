import { View, Text, Button } from "react-native";
import React, { useState } from "react";

const fruit = () => {
  console.warn("FUNCTION CALLED");
};

const Details = (props) => {
  // const [color, setColor] = useState(true);

  return (
    <View>
      {/* <Text style={{ fontSize: 20 }}>NAME : PG</Text>
      <Text style={{ fontSize: 20 }}>AGE : 20</Text>
      <Text style={{ fontSize: 20 }}>CLG : GGGITS</Text>
      <Button title="Press it" onPress={() => fruit()} />

      <Button
        title="delete"
        color={color ? "red" : "green"}
        onPress={() => setColor(!color)}
      /> */}
      <Text>{props.name}</Text>
    </View>
  );
};

export default Details;
