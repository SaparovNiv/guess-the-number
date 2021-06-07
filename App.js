import React, { useState } from "react";
import { ProgressViewIOSComponent, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import GameOverScreen from "./components/screens/GameOverScreen";
import GameScreen from "./components/screens/GameScreen";
import StartGameScreen from "./components/screens/StartGameScreen";
import colors from "./constants/Colors";
import strings from "./constants/Strings";

export default function App() {
  // Whenever we have a user number it means the user selected a number and clicked startGame
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRound(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRound(numOfRounds);
  };

  const configureNewGame = () => {
    setGuessRound(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRound == 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOverScreen numberOfGuess={guessRound} newGame={configureNewGame} />
    );
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
