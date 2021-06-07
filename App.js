import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./components/screens/GameScreen";
import StartGameScreen from "./components/screens/StartGameScreen";
import colors from "./constants/Colors";
import strings from "./constants/Strings";

export default function App() {
  // Whenever we have a user number it means the user selected a number and clicked startGame
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }
  return (
    <View style={styles.container}>
      <Header title={strings.appTitle} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bacgrkoud,
  },
});
