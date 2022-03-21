import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./styles";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={() => navigation.navigate("Signup")}>
        Hello
      </Text>
    </View>
  );
};

export default Home;
