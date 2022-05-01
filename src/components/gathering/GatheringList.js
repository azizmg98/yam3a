import { StyleSheet, Dimensions } from "react-native";
import React from "react";
import gatheringStore from "../../stores/gatheringStore";
import GatheringItem from "./GatheringItem";
import { observer } from "mobx-react";
import { ScrollView, VStack } from "native-base";

const GatheringList = () => {
  const gatheringList = gatheringStore.hostedGatherings.map((gathering) => (
    <GatheringItem gathering={gathering} key={gathering._id} />
  ));
  return (
    <VStack style={styles.list}>
      <ScrollView>{gatheringList}</ScrollView>
    </VStack>
  );
};

export default observer(GatheringList);

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#F4F6F4",
    height: Dimensions.get("window").height,
    marginBottom: 200,
  },
});
