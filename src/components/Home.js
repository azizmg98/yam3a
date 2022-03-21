import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import authStore from "../stores/authStore";
import { Button, NativeBaseProvider } from "native-base";

const Home = ({ route, navigation }) => {
  const handleSignout = (user) => {
    authStore.signout(user);
    navigation.navigate("Signin");
  };
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
        <Button
          color="rgba(99, 32, 238, 1)"
          onPress={handleSignout}
          title="SignOut"
        >
          SignOut
        </Button>
      </NativeBaseProvider>
      {/* <Text style={styles.title} onPress={() => navigation.navigate("Signin")}>
        Hello
      </Text> */}
    </View>
  );
};

export default Home;
