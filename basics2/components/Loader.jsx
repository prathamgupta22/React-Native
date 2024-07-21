import { View, Text, ActivityIndicator, Button } from "react-native";
import React, { useState } from "react";

const Loader = () => {
  const [show, setShow] = useState(false);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Loader</Text>

      <ActivityIndicator size={100} color="gold" animating={show} />

      <Button
        title="show loader"
        onPress={() => (show ? setShow(false) : setShow(true))}
      />
    </View>
  );
};

export default Loader;
