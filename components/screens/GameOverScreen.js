import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Card from "../Card";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card>
        <Text>Game Over</Text>
        <Text>Number of rounds {props.numberOfGuess}</Text>
        <Button title="NEW GAME" onPress={() => props.newGame()} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
