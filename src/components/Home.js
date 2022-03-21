import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./shared/Styles";
import YATitle from "./shared/YATitle";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title onPress={() => navigation.navigate("Signup")}>Hello</Title>
    </View>
  );
};

export default Home;
