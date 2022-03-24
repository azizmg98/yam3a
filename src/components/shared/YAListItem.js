import { StyleSheet } from "react-native";
import YATitle from "../shared/YATitle";
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
} from "native-base";
import YAText from "./YAText";
import YAImageS from "./YAImageS";
import YAAvatar from "./YAAvatar";

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
      position="relative"
      //   p="16"
      m="2"
    >
      <HStack>
        <YAImageS m="4" />
        <YATitle title="Coded Zwara" fontSize="25" mt="1.5" right="1" />
      </HStack>
      <Center>
        <VStack>
          <YAText
            title="Friday, March 25"
            fontSize="14"
            color="rgba(154, 151, 151, 1)"
            bottom="70"
            right="4"
          />
          <YAAvatar bottom="16" size="sm" right="4" />
        </VStack>
      </Center>
    </Box>
  );
};

export default YAListItem;

const styles = StyleSheet.create({});
