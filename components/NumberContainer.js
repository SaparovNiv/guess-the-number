import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/Colors";
const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.accent,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "center",
  },
});
export default NumberContainer;
