import { StyleSheet, Text, View, Alert } from "react-native";
import React from "react";
import { NativeBaseProvider, Button, VStack } from "native-base";
import { Entypo } from "@expo/vector-icons";

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
    <View style={styles.logoutIcon}>
      <Entypo
        name="log-out"
        size={24}
        color="#6E876E"
        onPress={handleSignout}
      />
    </View>
  );
};

export default observer(Signout);

const styles = StyleSheet.create({
  logoutIcon: {
    marginRight: 15,
  },
});
