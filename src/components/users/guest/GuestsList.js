import { StyleSheet, ScrollView } from "react-native";
import { observer } from "mobx-react";
import GuestItem from "./GuestItem";
import guestStore from "../../../stores/guestStore";

const GuestList = () => {
  const guestList = guestStore.availableGuests.map((guest) => (
    <GuestItem key={guest._id} guest={guest} />
  ));

  return <ScrollView>{guestList}</ScrollView>;
};

export default observer(GuestList);
