import { StyleSheet, Text, View } from "react-native";
import React from "react";
import gatheringStore from "../../stores/gatheringStore";
import GatheringItem from "./GatheringItem";

const GatheringList = () => {
  const gatheringList = gatheringStore.gathering.map((gathering) => (
    <GatheringItem gathering={gathering} key={gathering._id} />
  ));
  return <View>{gatheringList}</View>;
};

export default GatheringList;

const styles = StyleSheet.create({});
