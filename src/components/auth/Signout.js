import { StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import { NativeBaseProvider, Button, VStack } from "native-base";

// import styles from "./shared/Styles";
// import { FontAwesome } from "@expo/vector-icons";
import { observer } from "mobx-react";
// import YATitle from "./shared/YATitle";
import authStore from "../../stores/authStore";
import { useNavigation } from "@react-navigation/native";

const Signout = () => {
  const navigation = useNavigation();
  const handleSignout = () => {
    authStore.signout();
    navigation.navigate("Signin");
    Alert.alert("Signed Out");

    //not signedin
  };
  return (
    <NativeBaseProvider>
      <VStack>
        <Button
          name="sign-out"
          width={24}
          height={10}
          color="black"
          style={styles.button}
          onPress={handleSignout}
        >
          Sign Out
        </Button>
      </VStack>
    </NativeBaseProvider>
  );
};

export default observer(Signout);

const styles = StyleSheet.create({
  button: {
    marginLeft: 30,
    marginRight: 9,
    backgroundColor: "#6320EE",
  },
});
