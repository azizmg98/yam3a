import { StyleSheet } from "react-native";
import YAAvatar from "./YAAvatar";
import {
  Box,
  AspectRatio,
  Image,
  Center,
  Stack,
  HStack,
  Heading,
  Text,
} from "native-base";

const YAListItem = () => {
  return (
    <Box
      shadow="3"
      rounded="2xl"
      width={"90%"}
      height="115"
      alignSelf="center"
      _light={{ bg: "coolGray.50" }}
      _dark={{ bg: "gray.700" }}
      //   p="16"
      m="2"
    >
      <YAAvatar />
      <Text>hi</Text>
    </Box>
  );
};

export default YAListItem;

const styles = StyleSheet.create({});
