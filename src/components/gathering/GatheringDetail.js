import { StyleSheet, View, Dimensions, Text, Image } from "react-native";
import { Button } from "native-base";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { baseURL } from "../../stores/instance";
import ListAddedGuest from "../users/guest/ListAddedGuest";

const GatheringDetail = ({ route, navigation }) => {
  const { gathering } = route.params;
  console.log(
    "🚀 ~ file: GatheringDetail.js ~ line 10 ~ GatheringDetail ~ gathering",
    gathering
  );
  const handleAddingGuest = () => {
    navigation.navigate("GuestList", { gathering: gathering });
  };
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Image
          source={{ uri: baseURL + gathering.image }}
          style={styles.gatheringImage}
          resizeMode="cover"
        ></Image>
        <Button style={styles.button} onPress={handleAddingGuest}>
          Invite Guests
        </Button>
        <View>
          <Text style={{ top: 50, backgroundColor: "white" }}>
            {gathering.title}
          </Text>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default GatheringDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  yam3aImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2.5,
    zIndex: -1,
  },
  backIcon: {
    position: "absolute",
    left: 20,
    marginTop: 40,
    opacity: 0.5,
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
