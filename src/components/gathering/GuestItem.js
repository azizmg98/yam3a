import { StyleSheet } from "react-native";
import YAWideButton from "../shared/YAWideButton";
import YAText from "../shared/YAText";
import { HStack } from "native-base";
import guestStore from "../../stores/guestStore";

const GuestItem = ({ guest, gatheringId }) => {
  const handleAdd = () => {
    guestStore.addGuest(guest._id, gatheringId);
  };

  return (
    <HStack>
      <YAText fontSize="18" mt="5">
        {guest.user.username}
      </YAText>
      <YAWideButton handlePress={handleAdd}>add</YAWideButton>
    </HStack>
  );
};

export default GuestItem;

const styles = StyleSheet.create({});
