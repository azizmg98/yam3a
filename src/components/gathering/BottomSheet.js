import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useEffect } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import YATitle from "../shared/YATitle";
import { useNavigation } from "@react-navigation/native";
import { Button, HStack, VStack } from "native-base";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import YAText from "../shared/YAText";
import YAAvatar from "../shared/YAAvatar";
import guestStore from "../../stores/guestStore";
import GuestItem from "./GuestItem";
import GatheringGuests from "./GatheringGuests";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT;

const BottomSheet = (props) => {
  const navigation = useNavigation();
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      translateY.value = Math.min(translateY.value, -SCREEN_HEIGHT / 1.5);
    });

  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 1.5, { damping: 50 });
  });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const guestList = props.guests&&guestStore.availableGuests.map((guest) => (
    <GuestItem key={guest._id} guest={guest} gatheringId={props.gatheringId} />
  ));

  const gatheringGuestList = props.guests.map((guest) => (
    <GatheringGuests guest={guest} key={guest._id} />
  ));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <View style={styles.line}></View>
        <View style={styles.gatheringTitle}>
          <YATitle title={props.title} />
        </View>
        <HStack style={styles.dateTimeRow}>
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
            <Text style={styles.text}>{props.date}</Text>
          </VStack>
        </HStack>
        <HStack style={styles.guestsRow}>
          <SafeAreaView style={styles.container}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <YAAvatar size={"lg"} marginLeft={3} />
              <HStack>{gatheringGuestList}</HStack>
            </ScrollView>
          </SafeAreaView>
        </HStack>
        <View>
          <Button
            style={{
              borderRadius: 30,
              marginLeft: 20,
              marginTop: 10,
              padding: 10,
              marginRight: 20,
              backgroundColor: "rgba(99, 32, 238, 1)",
              height: 50,
              alignSelf: "center",
            }}
            onPress={() => navigation.navigate("GuestList")}
          >
            Invite guests
          </Button>
          <VStack>{guestList}</VStack>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: SCREEN_HEIGHT,
    borderRadius: 20,
  },
  line: {
    width: 75,
    height: 5,
    backgroundColor: "#F1F1F1",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 20,
  },
  gatheringTitle: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,

    width: Dimensions.get("window").width - 40,
  },
  text: {
    color: "#9A9797",
    marginLeft: 4,
    marginRight: 20,
  },
  dateTimeRow: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    width: Dimensions.get("window").width - 40,
  },
  guestsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
