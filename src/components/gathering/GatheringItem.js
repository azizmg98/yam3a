import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { observer } from "mobx-react";
import YAListItem from "../shared/YAListItem";

const GatheringItem = ({ gathering }) => {
  return <YAListItem title={gathering.title} />;
};

export default observer(GatheringItem);

const styles = StyleSheet.create({});
