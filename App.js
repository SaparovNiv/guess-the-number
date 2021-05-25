import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./components/screens/StartGameScreen";
import colors from "./constants/Colors";
import strings from "./constants/Strings";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={strings.appTitle} />
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bacgrkoud,
  },
});
