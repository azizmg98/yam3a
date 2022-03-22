import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { observer } from "mobx-react";

const GatheringItem = ({ gathering }) => {
  console.log(gathering.title);
  return (
    <View>
      <Text>{gathering.title}</Text>
    </View>
  );
};

export default observer(GatheringItem);

const styles = StyleSheet.create({});
