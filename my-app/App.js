import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Product from "./components/Product";

export default function App() {
  const products = [
    {
      name: "Samsung",
      color: "white",
      price: 30000,
      image:
        "https://media.istockphoto.com/id/1840192421/photo/smartphone-template-with-blank-screen-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=Nnf-jxIKiC-uYc3LHL-KVxiRnGhnal-97adjzRSw-m4=",
    },
    {
      name: "Samsung",
      color: "white",
      price: 30000,
      image:
        "https://media.istockphoto.com/id/1840192421/photo/smartphone-template-with-blank-screen-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=Nnf-jxIKiC-uYc3LHL-KVxiRnGhnal-97adjzRSw-m4=",
    },
    {
      name: "Nokia",
      color: "black",
      price: 70000,
      image:
        "https://www.ineedamobile.com/wp-content/uploads/2019/05/Second-Hand-Samsung-S10e.png",
    },
    {
      name: "Apple",
      color: "green",
      price: 400000,
      image:
        "https://www.ineedamobile.com/wp-content/uploads/2019/05/Second-Hand-Samsung-S10e.png",
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {products.map((item) => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
