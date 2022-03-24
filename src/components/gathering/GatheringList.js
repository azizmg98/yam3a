import { StyleSheet, Text, View } from "react-native";
import React from "react";
import gatheringStore from "../../stores/gatheringStore";
import GatheringItem from "./GatheringItem";

import NavBar from "../../navigate/NavBar";

import { VStack } from "native-base";
import YAListItem from "../shared/YAListItem";


const GatheringList = () => {
  const gatheringList = gatheringStore.gathering.map((gathering) => (
    <GatheringItem gathering={gathering} key={gathering._id} />
  ));
  return (


    <VStack>
      <YAListItem />
      <YAListItem />
    </VStack>

  );
};

export default GatheringList;

const styles = StyleSheet.create({});
