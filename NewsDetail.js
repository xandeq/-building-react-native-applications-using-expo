import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from "react-native";

export default function NewsDetail({ route, navigation }) {
  const [dataLoading, finishLoading] = useState(true);
  const [allPostData, setAllPostData] = useState([]);
  const { url } = route.params;
  const selectedPost = allPostData.find((post) => post.url === url);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=845bc8a0f6b042c7808b61d7ae0242ff"
    )
      .then((response) => response.json())
      .then((json) => setAllPostData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => finishLoading(false));
  }, []);

  return (
    <View styles={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttontext}>Go back</Text>
      </TouchableOpacity>
      {dataLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <Text style={styles.title}>{selectedPost.title}</Text>
          <Image
            style={styles.storyimage}
            source={{ uri: selectedPost.urlToImage }}
          />
          <Text style={styles.blurb}>{selectedPost.description}</Text>
          <Text style={styles.content}>{selectedPost.content}</Text>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  buttontext: {
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  storyimage: {
    height: 300,
    width: "100%",
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 20,
    padding: 20
  },
  blurb: {
    fontFamily: "Roboto",
    fontStyle: "italic",
    fontSize: 14,
    padding: 20
  },
  content: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: 16,
    paddingTop: 30,
    paddingBottom: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
