import React from "react";
import { View } from "react-native";

const BaseScreen = (props) => {
  return <View class={classes.Content}>{props.children}</View>;
};

const styles = StyleSheet.create({});

export default BaseScreen;
