import { StyleSheet } from "react-native";
import React from "react";
import { Button, NativeBaseProvider } from "native-base";

const YAButton = (props, title) => {
  return (
    <NativeBaseProvider>
      <Button {...props} style={styles.button}>
        {{ title }}
      </Button>
    </NativeBaseProvider>
  );
};

export default YAButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    color: "rgba(99, 32, 238, 1)",
    backgroundColor: "rgba(99, 32, 238, 1)",
  },
});
