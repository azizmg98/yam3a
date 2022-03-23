import { StyleSheet, Text } from "react-native";
import React from "react";

const YATitle = (props) => {
  return (
    <Text {...props} style={styles.title}>
      {props.title}
    </Text>
  );
};

export default YATitle;

const styles = StyleSheet.create({
  title: {
    alignSelf: "flex-start",
    fontSize: 45,
    fontWeight: "bold",
    color: "rgba(69, 69, 69, 1)",
  },
});
