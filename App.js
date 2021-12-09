import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import { AppLoading } from "expo";
import { navigationRef } from "./RootNavigation";
import HomePage from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import NewsDetail from "./NewsDetail";
import About from "./About";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      ref={navigationRef}
    >
      <Stack.Navigator initialRouteName="Globomantics" headerMode="screen">
        <Stack.Screen
          name="Globomantics"
          component={HomePage}
          options={{
            header: () => <Header headerDisplay="Globomantics" />,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetail}
          options={{
            header: () => <Header headerDisplay="News" />,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="About"
          component={About}
          options={{
            header: () => <Header headerDisplay="About" />,
          }}
        ></Stack.Screen>
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
  //}
}