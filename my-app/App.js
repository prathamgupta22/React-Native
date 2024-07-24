import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Product from "./components/Product";

export default function App() {
  const products = [
    {
      name: "Samsung",
      color: "white",
      price: 30000,
    },
    {
      name: "Nokia",
      color: "white",
      price: 70000,
    },
    {
      name: "Apple",
      color: "white",
      price: 400000,
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      {products.map((item) => (
        <Product item={item} />
      ))}
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
