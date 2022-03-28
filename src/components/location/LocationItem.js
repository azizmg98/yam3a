import { StyleSheet, Text, View, Dimensions } from "react-native";
import { HStack, NativeBaseProvider, VStack, Box, Button } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import YATitle from "../shared/YATitle";
import YAText from "../shared/YAText";

const LocationItem = ({ location }) => {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Box style={styles.box}>
          <YATitle title={location.title} />
          <HStack style={styles.locationRow}>
            <VStack>
              <HStack>
                <Ionicons name="location-outline" size={22} color="#9A9797" />
                <YAText title={location.address} />
              </HStack>
            </VStack>
          </HStack>
          <View>
            <HStack style={styles.hLine}></HStack>
          </View>
          <HStack style={styles.actionRow}>
            <Button variant="ghost" _text={{ color: "#6320EE" }}>
              Select
            </Button>
            <VStack style={styles.vLine}></VStack>
            <Button variant="ghost" _text={{ color: "#789178" }}>
              Edit
            </Button>
            <VStack style={styles.vLine}></VStack>
            <Button variant="ghost" _text={{ color: "#FF0000" }}>
              Delete
            </Button>
          </HStack>
        </Box>
      </View>
    </NativeBaseProvider>
  );
};

export default LocationItem;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    marginTop: 20,
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  box: {
    width: Dimensions.get("window").width - 30,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    backgroundColor: "white",
    borderRadius: 12,
    borderColor: "black",
    height: 160,
    alignSelf: "center",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  locationRow: {
    marginTop: 7,
    width: 320,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#9A9797",
    marginLeft: 3,
    marginRight: 12,
  },
  hLine: {
    borderBottomColor: "#ECEBEB",
    borderBottomWidth: 1,
    bottom: -38,
  },
  vLine: {
    borderRightColor: "#ECEBEB",
    borderRightWidth: 1,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    bottom: -40,
  },
  btns: {
    height: 20,
    width: "40%",
    backgroundColor: "white",
  },
});
