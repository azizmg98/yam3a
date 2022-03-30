import { StyleSheet } from "react-native";
import YAWideButton from "../shared/YAWideButton";
import YAText from "../shared/YAText";
import { Button, HStack, Pressable } from "native-base";
import guestStore from "../../stores/guestStore";

const GuestItem = ({ guest, gatheringId }) => {
  const handleAdd = () => {
    guestStore.addGuest(guest._id, gatheringId);
    console.log("added", guest._id);
  };

  return (
    <HStack>
      <YAText
        style={{
          backgroundColor: "Black",
        }}
      >
        {guest.user.username}
      </YAText>
      <Pressable>
        <Button onPress={handleAdd}>add</Button>
      </Pressable>
    </HStack>
  );
};

export default GuestItem;

const styles = StyleSheet.create({});
