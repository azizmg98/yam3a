import { StyleSheet, ScrollView } from "react-native";
import { observer } from "mobx-react";
import GuestItem from "./GuestItem";
import guestStore from "../../stores/guestStore";
import { View } from "native-base";

const GuestList = (props) => {
  const guestList = guestStore.availableGuests.map((guest) => (
    <GuestItem key={guest._id} guest={guest} gatheringId={props.gatheringId} />
  ));

  return (
    <ScrollView style={styles.backIcon}>
      <View>{guestList}</View>
    </ScrollView>
  );
};

export default observer(GuestList);
const styles = StyleSheet.create({
  backIcon: {
    position: "absolute",
    left: 50,
    marginTop: 40,
    opacity: 0.7,
  },
});
