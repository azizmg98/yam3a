import { StyleSheet, View, TouchableOpacity } from "react-native";

import { useState } from "react/cjs/react.development";

// import { baseURL } from "../../stores/instance";
import { Text, Image, Button, HStack } from "native-base";
import authStore from "../../../stores/authStore";

const GuestItem = ({ user }) => {
  const [guest, setGuest] = useState("");

  const handleAddingGuest = (user) => {
    setGuest(user);
    // console.log("inside handle submit");
    console.log(guest);
    authStore.addGuest(user); //gatheringId, to be aaded after Aisha finish the gathering
    // authStore.removeUsertoInvite(guest);
  };
  return (
    <TouchableOpacity>
      <HStack>
        <View style={styles.box}>
          <Image
            style={styles.image}
            source={{
              uri: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F09%2Fgettyimages-143479959-2000.jpg&w=1100&h=737&c=sc&poi=face&q=60",
              alt: "yam3a image",
            }}
          />
          {/* <Image style={styles.image} source={{ uri: user.image }} /> */}
          <Text style={styles.username}>{user.username}</Text>
        </View>
        <Button
          name="add-guest"
          width={24}
          height={10}
          style={styles.button}
          onPress={() => handleAddingGuest(user)}
        >
          Invite
        </Button>
      </HStack>
    </TouchableOpacity>
  );
};

export default GuestItem;

const styles = StyleSheet.create({
  username: {
    color: "#454545",
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 10,
  },
  image: {
    borderRadius: 10,
    width: 60,
    height: 60,
  },
  box: {
    borderRadius: 10,
    flex: 1,
    width: "90%",
    padding: 5,
    marginTop: 50,
    marginBottom: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 1,
      width: -2,
    },
    elevation: 2,
  },
  addGuest: {
    backgroundColor: "#6320EE",
    flex: 1,
    color: "#454545",
    fontSize: 22,

    marginLeft: 10,
  },
  button: {
    color: "#454545",
    marginLeft: 30,
    marginRight: 9,
    backgroundColor: "#6320EE",
  },
});
