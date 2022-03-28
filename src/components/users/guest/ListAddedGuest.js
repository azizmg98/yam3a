import { StyleSheet, ScrollView } from "react-native";
import { observer } from "mobx-react";
import AddedGuest from "./AddedGuest";
import authStore from "../../../stores/authStore";
// import { Avatar } from "native-base";

const ListAddedGuest = ({ gathering }) => {
  const addedGuestList = authStore.guests.map((guest) => (
    <AddedGuest key={guest._id} gathering={gathering} guest={guest} />
  ));
  return <ScrollView>{addedGuestList}</ScrollView>;
};

export default observer(ListAddedGuest);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
