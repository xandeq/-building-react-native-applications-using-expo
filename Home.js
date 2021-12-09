import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList, ItemList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function HomePage({ navigation }) {
  const [dataLoading, finishLoading] = useState(true);
  const [newsData, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=845bc8a0f6b042c7808b61d7ae0242ff"
    )
      .then((response) => response.json())
      .then((json) => setData(json.articles))
      .catch((error) => console.error(error))
      .finally((item) => finishLoading(item));
  }, []);

  const storyItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("NewsDetail", { url: item.url })}
      >
        <View style={styles.listings}>
          <Text style={styles.title}>{item.title}</Text>
            <Image style={styles.thumbnail} source={{uri: item.urlToImage}} />
          <Text style={styles.blurb}>{item.description}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
    <Text>Articles</Text>
    {dataLoading ? <ActivityIndicator /> : (
        <FlatList data={newsData} keyExtractor={item => item.url} renderItem={ storyItem } />
    )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    padding: 20
  },
  thumbnail: {
      height: 200,
      width: '98%'
  },
  listings: {
      paddingBottom: 10,
      fontWeight: 'bold'
  },
  blurb: {
      fontStyle: 'italic'
  }
});
