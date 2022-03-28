import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Text, HStack } from "native-base";
import authStore from "../../../stores/authStore";

const GuestItem = ({ gathering, user }) => {
  const handleAddingGuest = () => {
    authStore.addGuest(gathering, user);
    console.log(
      "🚀 ~ file: GuestItem.js ~ line 6 ~ GuestItem ~ gathering",
      gathering
    );
  };
  return (
    <TouchableOpacity>
      <View style={styles.box}>
        <Text style={styles.username}>{user.username}</Text>
        <Button style={styles.button} onPress={() => handleAddingGuest()}>
          Invite
        </Button>
      </View>
    </TouchableOpacity>
  );
};

export default GuestItem;

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
