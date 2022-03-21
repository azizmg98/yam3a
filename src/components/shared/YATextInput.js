import { StyleSheet, TextInput } from "react-native";
import React from "react";

const YATextInput = (props) => {
  return <TextInput {...props} style={styles.textInput}></TextInput>;
};

export default YATextInput;

const styles = StyleSheet.create({
  textInput: {},
});
