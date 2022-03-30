import { StyleSheet } from "react-native";
import YAWideButton from "../shared/YAWideButton";
import YAText from "../shared/YAText";
import { Button, HStack, Pressable } from "native-base";
import guestStore from "../../stores/guestStore";
import { TouchableOpacity } from "react-native-web";

const GuestItem = ({ guest, gatheringId }) => {
  const handleAdd = () => {
    guestStore.addGuest(guest._id, gatheringId);
    console.log("added", guest._id);
  };

  return (
    <HStack>
      <YAText fontSize="18" mt="5">
        {guest.user.username}
      </YAText>
      <Pressable>
        <Button
          style={{
            fontSize: "18",
            borderRadius: 30,

            borderRadius: 20,
            marginTop: 10,
            padding: 10,
            marginLeft: 90,
            backgroundColor: "rgba(99, 32, 238, 1)",
            height: 50,
            alignSelf: "center",
          }}
          onPress={handleAdd}
        >
          add
        </Button>
      </Pressable>
    </HStack>
  );
};

export default GuestItem;

const styles = StyleSheet.create({});
