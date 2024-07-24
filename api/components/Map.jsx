import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

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
    <ScrollView>
      <Text style={{ fontSize: 30 }}>API CALL</Text>
      {data.length
        ? data.map((item) => (
            <View>
              <Text style={{ fontSize: 30 }}>Id : {item.id}</Text>
              <Text style={{ fontSize: 30 }}>Title {item.title}</Text>
              <Text style={{ fontSize: 30 }}>Body {item.title}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
}
