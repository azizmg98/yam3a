import { StyleSheet, Button } from "react-native";
import React from "react";

const YAButton = (props) => {
  return <Button {...props} style={styles.button} />;
};

export default YAButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    color: "rgba(99, 32, 238, 1)",
  },
});
