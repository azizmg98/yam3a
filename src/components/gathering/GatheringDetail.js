import { StyleSheet, View, Dimensions, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "./BottomSheet";
import { Image } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { baseURL } from "../../stores/instance";

const GatheringDetail = ({
  navigation,
  image,
  title,
  guests,
  date,
  time,
  location,
}) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Ionicons
          name="md-caret-back-circle-sharp"
          style={styles.backIcon}
          size={50}
          color="white"
          onPress={() => navigation.navigate("GatheringList")}
        />
        <Image
          style={styles.yam3aImage}
          source={{
            uri: image,
            alt: "yam3a image",
          }}
        />
        <BottomSheet
          title={title}
          guests={guests}
          date={date}
          time={time}
          location={location}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default GatheringDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  yam3aImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2.5,
    zIndex: -1,
  },
  backIcon: {
    position: "absolute",
    left: 20,
    marginTop: 40,
    opacity: 0.5,
  },
});
