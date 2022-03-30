import { StyleSheet } from "react-native";
import React from "react";
import YAWideButton from "../shared/YAWideButton";
import YAText from "../shared/YAText";
import { HStack, View } from "native-base";

const handleAdd = (guest) => {
  authStore.addGuest(guest._id);
};
const GuestItem = ({ guest }) => {
  return (
    <HStack>
      <YAText>{guest.user.username}</YAText>
      <YAWideButton handlePress={handleAdd}>add</YAWideButton>
    </HStack>
  );
};

export default GuestItem;

const styles = StyleSheet.create({});
