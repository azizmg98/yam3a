import { StyleSheet, View, TouchableOpacity } from "react-native";

import { useState } from "react/cjs/react.development";

// import { baseURL } from "../../stores/instance";
import { Text } from "native-base";
import authStore from "../../../stores/authStore";

const GuestItem = ({ user }) => {
  const [guest, setGuest] = useState("");

  const handleAddingGuest = (user) => {
    setGuest(user);
    // console.log("inside handle submit");
    console.log(guest);
    authStore.addGuest(user._id);
    // authStore.removeUsertoInvite(guest);
  };
  return (
    <TouchableOpacity onPress={() => handleAddingGuest(user)}>
      <View style={styles.box}>
        {/* <Image style={styles.image} source={{ uri: user.image }} /> */}
        <Text style={styles.username}>{user.username}</Text>
      </View>
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
    width: 60,
    height: 60,
  },
  box: {
    flex: 1,
    padding: 5,
    marginTop: 5,
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
    color: "white",
    fontSize: 22,

    marginLeft: 10,
  },
});
