import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import globoCatalog from "./CatalogDB";

export default function CatalogDetail({ route, navigation }) {
  const [catalogData, setCatalogData] = useState(globoCatalog);
  const { id } = route.params;
  const selectedProduct = catalogData.find((post) => post.modelNumber === id);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttontext}>Go Back</Text>
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.model}>{selectedProduct.model}</Text>
        <Image style={styles.productimage} source={selectedProduct.image} />
        <Text style={styles.description}>{selectedProduct.description}</Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Quote", {
            model: selectedProduct.model,
            modelNumber: selectedProduct.modelNumber,
          })
        }
      >
        <Text style={styles.buttontext}>Submit Quote</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginBottom: 100,
    alignItems: "center",
  },
  button : {
    padding: 20
  },
  buttontext : {
    fontWeight: 'bold'
  },
  model : {
    paddingBottom: 15
  },
  productimage: {
    height: 250,
    width: '100%'
  },
  thumbnail: {
    height: 260,
    width: "100%",
  },
  producttext: {
    alignItems: "flex-start",
    paddingLeft: 15,
    flex: 1,
  }
});
