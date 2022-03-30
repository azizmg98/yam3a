import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GatheringGuests = ({ guest }) => {
  console.log(guest);
  return (
    <View>
      <Text>{guest.user.username}</Text>
    </View>
  );
};

export default GatheringGuests;

const styles = StyleSheet.create({});
