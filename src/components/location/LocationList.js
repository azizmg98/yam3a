import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, ScrollView } from "native-base";
import React from "react";

import locationStore from "../../stores/locationStore";
import LocationItem from "./LocationItem";
import { observer } from "mobx-react";

const LocationList = () => {
  const locationList = locationStore.locations.map((location) => (
    <LocationItem key={location._id} location={location} />
  ));

  return (
    <NativeBaseProvider>
      <ScrollView>{locationList}</ScrollView>
    </NativeBaseProvider>
  );
};

export default observer(LocationList);

const styles = StyleSheet.create({});
