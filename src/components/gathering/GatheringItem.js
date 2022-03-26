import { StyleSheet } from "react-native";
import React from "react";
import { observer } from "mobx-react";
import YAListItem from "../shared/YAListItem";
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
import YAText from "../shared/YAText";
import YAImageS from "../shared/YAImageS";
import YAAvatar from "../shared/YAAvatar";
import YATitle from "../shared/YATitle";

const GatheringItem = ({ gathering }) => {
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
        <Center>
          <VStack>
            <YATitle title={gathering.title} fontSize="25" />
            <YAText
              title="Friday, March 25"
              fontSize="14"
              color="rgba(154, 151, 151, 1)"
            />
            <YAAvatar size="sm" />
          </VStack>
        </Center>
      </HStack>
    </Box>
  );
};

export default observer(GatheringItem);

const styles = StyleSheet.create({});
