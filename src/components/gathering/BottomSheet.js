import { StyleSheet, Text, View, Dimensions } from "react-native";
import { React, useEffect } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import YATitle from "../shared/YATitle";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import GatheringList from "./GatheringList";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT;

const BottomSheet = () => {
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
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <Ionicons
          name="md-caret-back-circle-sharp"
          style={styles.backIcon}
          size={50}
          color="white"
          onPress={() => navigation.navigate("GatheringList")}
        />

        <View style={styles.line}></View>
        <YATitle title="Gathering Title" />
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
    height: 4,
    backgroundColor: "lightgrey",
    alignSelf: "center",
    marginVertical: 15,
    borderRadius: 20,
  },
  backIcon: {
    position: "absolute",
    top: -260,
    marginTop: 20,
    marginLeft: 15,
    opacity: 0.5,
  },
});
