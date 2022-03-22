import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LocationDetails from "./LocationDetails";
import locationStore from "../../stores/locationStore";
import { NativeBaseProvider } from "native-base";

const LocationItem = ({ location }) => {
  console.log("Location Item");
  console.log(location);
  return (
    <NativeBaseProvider>
      <Text>{location.title}</Text>
      <Text>{location.address}</Text>
      <Text>{location.coordinates}</Text>
    </NativeBaseProvider>
  );
};

export default LocationItem;

const styles = StyleSheet.create({});
