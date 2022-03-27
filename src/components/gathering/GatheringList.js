import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import gatheringStore from "../../stores/gatheringStore";
import GatheringItem from "./GatheringItem";
import { observer } from "mobx-react";

import NavBar from "../../navigate/NavBar";

import { ScrollView, VStack } from "native-base";
import YAListItem from "../shared/YAListItem";

const GatheringList = () => {
  const gatheringList = gatheringStore.hostedGatherings.map((gathering) => (
    <GatheringItem gathering={gathering} key={gathering._id} />
  ));
  return (
    <VStack style={styles.list}>
      <ScrollView>
        <YAListItem />
        <YAListItem />
        <YAListItem />
        <YAListItem />
        <YAListItem />
        <YAListItem />
        <YAListItem />
        <YAListItem />
      </ScrollView>
    </VStack>
  );
};

export default observer(GatheringList);

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#F4F6F4",
    height: Dimensions.get("window").height,
  },
});
