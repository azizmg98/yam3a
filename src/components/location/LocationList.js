import { StyleSheet, Dimensions, Text } from "react-native";
import { ScrollView, VStack } from "native-base";
import React from "react";

import locationStore from "../../stores/locationStore";
import LocationItem from "./LocationItem";
import { observer } from "mobx-react";

const LocationList = () => {
  const locationList = locationStore.userLocations.map((location) => (
    <LocationItem key={location._id} location={location} />
  ));

  return (
    <VStack style={styles.list}>
      <ScrollView>{locationList}</ScrollView>
    </VStack>
  );
};

export default observer(LocationList);

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#F4F6F4",
    height: Dimensions.get("window").height,
  },
});
