import { StyleSheet, View, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "./BottomSheet";
import { Ionicons } from "@expo/vector-icons";

const GatheringDetail = ({ route, navigation }) => {
  const gathering = route.params;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Ionicons
          name="md-caret-back-circle-sharp"
          style={styles.backIcon}
          size={50}
          color="white"
          onPress={() => navigation.navigate("UserProfile")}
        />
       
        <BottomSheet
          key={gathering._id}
          gathering={gathering}
          guests={gathering.guests}
          date={gathering.date}
          time={gathering.time}
          // location={gathering.location}
        />
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
});
