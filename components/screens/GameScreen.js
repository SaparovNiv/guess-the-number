import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../Card";
import NumberContainer from "../NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);

  return rndNum === exclude ? generateRandomBetween(min, max, exclude) : rndNum;
};
const GameScreen = (props) => {
  // Need to make a guess
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = (direction) => {
    // First validate uesr
    switch (direction) {
      case "up":
        if (currentGuess > props.userChoice) {
          return Alert.alert("Thanks to Google", "I know you are lying");
        }
        currentLow.current = currentGuess;

        break;
      case "down":
        if (currentGuess < props.userChoice) {
          return Alert.alert("Thanks to Google", "I know you are lying");
        }
        currentHigh.current = currentGuess;
        break;
      default:
    }

    setCurrentGuess(
      generateRandomBetween(
        currentLow.current,
        currentHigh.current,
        currentGuess
      )
    );
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title="LOWER"
          onPress={() => {
            nextGuessHandler("down");
          }}
        />
        <Button
          title="GREATER"
          onPress={() => {
            nextGuessHandler("up");
          }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
