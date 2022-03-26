import { StyleSheet, Text, View } from "react-native";
import React from "react";
// importing libraries:
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// importing Screens:
import GatheringList from "../components/gathering/GatheringList";
import LocationCreate from "../components/location/LocationCreate";
import LocationList from "../components/location/LocationList";
import Home from "../components/Home";
import GuestsList from "../components/users/guest/GuestsList";
import Signin from "../components/auth/Signin";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="GatheringList" component={GatheringList} />
      <Tab.Screen name="LocationCreate" component={LocationCreate} />
      <Tab.Screen name="LocationList" component={LocationList} />
      <Tab.Screen name="Signin" component={Signin} />
      <Tab.Screen name="GuestsList" component={GuestsList} />
    </Tab.Navigator>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#6320EE",
    flexDirection: "row",
  },
});
