import { StyleSheet, Text, View } from "react-native";
import React from "react";
import gatheringStore from "../../stores/gatheringStore";
import GatheringItem from "./GatheringItem";
import NavBar from "../../navigate/NavBar";

const GatheringList = () => {
  const gatheringList = gatheringStore.gathering.map((gathering) => (
    <GatheringItem gathering={gathering} key={gathering._id} />
  ));
  return (
    <View>
      <View>{gatheringList}</View>
      <View></View>
    </View>
  );
};

export default GatheringList;

const styles = StyleSheet.create({});
