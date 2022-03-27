import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CreateGatheringIcon = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Ionicons
        style={styles.createGatheringIcon}
        name="md-add-circle"
        size={70}
        color="#6E876E"
        onPress={() => {
          navigation.navigate("GatheringDetail");
        }}
      />
    </View>
  );
};

export default CreateGatheringIcon;

const styles = StyleSheet.create({
  createGatheringIcon: {
    position: "absolute",
    marginTop: -43,
    alignSelf: "center",
  },
});
