import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";

export default function Index() {
  const [data, setData] = useState([]);

  const getAPIData = async () => {
    const url = "http://192.168.1.1:3001/users";
    const result = await fetch(url);
    let json = await result.json();
    console.warn(result);
    if (json) {
      setData(json);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <View style={styles.container}>
      {data.length
        ? data.map((item) => (
            <View style={styles.dataWrapper}>
              <View>
                <Text>{item.id}</Text>
              </View>
              <View>
                <Text>{item.fullName}</Text>
              </View>
              <View>
                <Text>{item.email}</Text>
              </View>
            </View>
          ))
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
