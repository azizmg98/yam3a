import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { Box } from "native-base";
import LocationListIcon from "../components/shared/LocationListIcon";
import GatheringListIcon from "../components/shared/GatheringListIcon";
import CreateGatheringIcon from "../components/shared/CreateGatheringIcon";

const NavBar = () => {
  return (
    <Box style={styles.navBar}>
      <LocationListIcon />
      <CreateGatheringIcon />
      <GatheringListIcon />
    </Box>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#D2DAD2",
    shadowColor: "lightgrey",
    shadowOpacity: 8,
    shadowRadius: 20,
    marginBottom: 30,
    borderRadius: 15,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    width: Dimensions.get("window").width - 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
