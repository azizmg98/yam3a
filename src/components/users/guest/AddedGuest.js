import { StyleSheet, View, TouchableOpacity } from "react-native";

import { useState } from "react/cjs/react.development";

// import { baseURL } from "../../stores/instance";
import { Button, Text, HStack } from "native-base";
import authStore from "../../../stores/authStore";

const AddedGuestItem = ({ guest }) => {
  return (
    <TouchableOpacity>
      <View style={styles.box}>
        {/* <Image style={styles.image} source={{ uri: user.image }} /> */}

        <Text style={styles.username}>{user.username}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddedGuestItem;

const styles = StyleSheet.create({
  username: {
    color: "#454545",
    fontSize: 20,
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
  button: {
    backgroundColor: "rgba(99, 32, 238, 1)",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 100,
  },
});
