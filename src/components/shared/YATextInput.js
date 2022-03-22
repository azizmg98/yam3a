import { StyleSheet, TextInput } from "react-native";
import { Input } from "native-base";
import React from "react";

const YATextInput = (props) => {
  return (
    <Input variant="underlined" {...props} style={styles.textInput}></Input>
  );
};

export default YATextInput;

const styles = StyleSheet.create({
  textInput: {},
});
