import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function QuotePage({ route }) {
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [phone, phoneChange] = useState("");
  const [message, messageChange] = useState("");
  const [submitError, setError] = useState(false);
  const [submitted, trySubmit] = useState(false);
  const { model } = route.params;
  const { modelnumber } = route.params;

  useEffect(() => {
    if (model !== "Footer") {
      const newQuote = `${model} model# : ${modelnumber}`;
      messageChange(newQuote);
    } else {
      messageChange("");
    }
  }, []);

  const postMessage = () => {
    if (!name | !email | !message) {
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {submitError ? (
          <Text style={styles.status}>
            You didn't enter a Name, Email or Message
          </Text>
        ) : (
          <Text style={styles.status}>
            Please enter a Name, Email and Message
          </Text>
        )}
        {submitted ? (
          <Text>
            Name: {name} Email: {email}
          </Text>
        ) : (
          <Text style={styles.req}>* required</Text>
        )}

        <Text style={styles.label}>Name *</Text>
        <TextInput
          styles={styles.input}
          onChangeText={(text) => nameChange(text)}
          value={name}
        ></TextInput>
        <Text style={styles.label}>Email *</Text>
        <TextInput
          styles={styles.input}
          onChangeText={(text) => emailChange(text)}
          value={email}
        ></TextInput>
        <Text style={styles.label}>Phone</Text>
        <TextInput
          styles={styles.input}
          onChangeText={(text) => phoneChange(text)}
          value={phone}
        ></TextInput>
        <Text style={styles.label}>Message *</Text>
        <TextInput
          styles={styles.multi}
          multiline
          numberOfLines={6}
          onChangeText={(text) => messageChange(text)}
          value={message}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={() => postMessage()}>
          <Text>Submit Quote</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    fontSize: 26,
    width: 250,
  },
  label: {
    fontSize: 18,
    paddingTop: 20,
  },
  req: {
    paddingTop: 10,
    fontStyle: "italic",
  },
  multi: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 16,
    width: 300,
  },
  button: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 10,
  },
  status: {
    paddingTop: 10,
    paddingBottom: 15,
  },
});
