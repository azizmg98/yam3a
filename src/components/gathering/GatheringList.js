import { StyleSheet } from "react-native";
import React from "react";
import gatheringStore from "../../stores/gatheringStore";
import GatheringItem from "./GatheringItem";
import { observer } from "mobx-react";

import NavBar from "../../navigate/NavBar";

import { VStack, View, Text } from "native-base";

const GatheringList = () => {
  const gatheringList = gatheringStore.hostedGatherings.map((gathering) => (
    <GatheringItem gathering={gathering} key={gathering._id} />
  ));
  return <VStack>{gatheringList}</VStack>;
};

export default observer(GatheringList);

const styles = StyleSheet.create({});
