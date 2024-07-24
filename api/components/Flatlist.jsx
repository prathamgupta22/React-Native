import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

export default function Index() {
  const [data, setData] = useState([]);

  const getAPIdata = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    let json = await result.json();
    setData(json);
  };

  useEffect(() => {
    getAPIdata();
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 30 }}>API CALL</Text>
      {data.length ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text style={{ fontSize: 20, backgroundColor: "red" }}>
                {item.id}
              </Text>
              <Text style={{ fontSize: 18 }}>{item.title}</Text>
              <Text style={{ fontSize: 18 }}>{item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
}
