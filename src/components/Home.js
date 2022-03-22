import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./shared/Styles";
import YATitle from "./shared/YATitle";
import authStore from "../stores/authStore";
import { Button, NativeBaseProvider } from "native-base";
import GuestsList from "./users/GuestsList";

const Home = ({ route, navigation }) => {
  const handleSignout = (user) => {
    authStore.signout(user);
    navigation.navigate("Signin");
  };
  return (
    <View style={styles.container}>
      <Text> List of Users</Text>
      <NativeBaseProvider>
        <Text
          style={styles.title}
          onPress={() => navigation.navigate("Signin")}
        >
          <GuestsList />
        </Text>
      </NativeBaseProvider>
    </View>
  );
};

export default Home;
