import { StyleSheet, View, Dimensions, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "./BottomSheet";
import { Image } from "native-base";
import GuestsList from "../users/guest/GuestsList";
import gatheringStore from "../../stores/gatheringStore";
const GatheringDetail = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Image
          style={styles.yam3aImage}
          source={{
            uri: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F09%2Fgettyimages-143479959-2000.jpg&w=1100&h=737&c=sc&poi=face&q=60",
            alt: "yam3a image",
          }}
        />
        <BottomSheet />
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
  },
});
