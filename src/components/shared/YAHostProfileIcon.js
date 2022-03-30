import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "native-base";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation } from "@react-navigation/native";

const YAHostProfileIcon = (props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.userProfileIcon}
      onPress={() => (navigation.navigate("UserProfile"), props)}
    >
      <Avatar
        size={10}
        {...props}
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        }}
      >
        NB
      </Avatar>
    </Pressable>
  );
};

export default YAHostProfileIcon;

const styles = StyleSheet.create({
  userProfileIcon: {
    marginLeft: 15,
    marginBottom: 10,
  },
});
