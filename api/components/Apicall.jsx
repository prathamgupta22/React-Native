import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [data, setData] = useState([]);

  const getAPIdata = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    let result = await fetch(url);
    let json = await result.json();
    // console.warn(json);
    setData(json);
  };

  useEffect(() => {
    getAPIdata();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>API CALL</Text>
      {data ? (
        <View>
          <Text style={{ fontSize: 30 }}>{data.id}</Text>
          <Text style={{ fontSize: 30 }}>{data.userId}</Text>
          <Text style={{ fontSize: 30 }}>{data.title}</Text>
          <Text style={{ fontSize: 30 }}>{data.body}</Text>
        </View>
      ) : null}
    </View>
  );
}
