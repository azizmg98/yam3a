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
    <YAListItem
      uri={gathering.image}
      title={gathering.title}
      date={gathering.date}
      time={gathering.time}
      location={gathering.location.address}
    />
  );
};

export default observer(GatheringItem);

const styles = StyleSheet.create({});
