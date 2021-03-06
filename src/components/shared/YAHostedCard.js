import { StyleSheet, Dimensions, View } from "react-native";
import {
  Box,
  AspectRatio,
  Image,
  Center,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  Button,
} from "native-base";

// importing shared components:
import YAText from "./YAText";
import YAImageS from "./YAImageS";
import YAAvatar from "./YAAvatar";
import YATitle from "./YATitle";

// importing icons:
import { Ionicons, AntDesign } from "@expo/vector-icons";
import gatheringStore from "../../stores/gatheringStore";
// import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const YAHostedCard = ({ route }) => {
  return (
    <View style={styles.container}>
      <Box style={styles.box}>
        <HStack style={styles.topRow}>
          <VStack>
            <YAImageS marginRight={3} />
          </VStack>
          <VStack>
            <YATitle title="{gathering}" />
            <HStack>
              <VStack>
                <AntDesign name="calendar" size={21} color="#9A9797" />
              </VStack>
              <VStack>
                <YAText style={styles.text} title="Friday, March 25" />
              </VStack>
              <VStack>
                <Ionicons name="time-outline" size={22} color="#9A9797" />
              </VStack>
              <VStack>
                <Text style={styles.text} color={"grey"}>
                  09:30 am
                </Text>
              </VStack>
            </HStack>
            <HStack style={styles.locationRow}>
              <VStack>
                <Ionicons name="location-outline" size={22} color="#9A9797" />
              </VStack>
              <VStack>
                <Text style={styles.text}>
                  Free Zone, Shuwaikh, Block 9, Street 79, CODED Campus
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </HStack>
        <View>
          <HStack style={styles.hLine}></HStack>
        </View>
        <HStack style={styles.actionRow}>
          <Button variant="ghost" _text={{ color: "#6320EE" }}>
            + Accept
          </Button>
          <VStack style={styles.vLine}></VStack>
          <Button variant="ghost" _text={{ color: "#789178" }}>
            - Not Interested
          </Button>
        </HStack>
      </Box>
    </View>
  );
};

export default YAHostedCard;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
  },
  box: {
    width: Dimensions.get("window").width - 30,
    shadowColor: "black",
    shadowRadius: 2,
    backgroundColor: "white",
    borderRadius: 12,
    borderColor: "black",
    height: 200,
    alignSelf: "center",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  topRow: {
    marginBottom: 10,
    height: "50%",
  },
  guestList: {
    flexDirection: "row",
    alignItems: "center",
    height: "50%",
  },
  locationRow: {
    marginTop: 7,
    width: 220,
  },
  text: {
    color: "#9A9797",
    marginLeft: 3,
    marginRight: 12,
  },
  hLine: {
    borderBottomColor: "#ECEBEB",
    borderBottomWidth: 1,
    bottom: -40,
  },
  vLine: {
    borderRightColor: "#ECEBEB",
    borderRightWidth: 1,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    bottom: -45,
  },
  btns: {
    height: 20,
    width: "40%",
    backgroundColor: "white",
  },
});
