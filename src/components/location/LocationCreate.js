import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { Input, NativeBaseProvider, Pressable } from "native-base";
import { useState } from "react/cjs/react.development";

// importing styling shared components:
import YAButton from "../shared/YAWideButton";
import YATitle from "../shared/YATitle";
// importing Stores:

import locationStore from "../../stores/locationStore";
// importing the map:
import MapScreen from "./MapScreen";

const LocationCreate = () => {
  const [location, setLocation] = useState();

  const handleSubmit = () => {
    console.log("inside handle submit");
    console.log(location);
    locationStore.addLocation(location);
  };

  return (
    <NativeBaseProvider>
      <YATitle title="Add New Location" />
      <View style={styles.container}>
        <MapScreen style={styles.mapScreen} />
        <View style={styles.locationForm}>
          <Text
            style={{
              marginBottom: 7,
              marginTop: 20,
              marginRight: 20,
              marginLeft: 20,
            }}
          >
            Name Your Location:
          </Text>
          <View
            style={{
              marginBottom: 7,
              marginRight: 20,
              marginLeft: 20,
            }}
          >
            <Input
              autoCorrect={false}
              onChangeText={(title) => setLocation({ ...location, title })}
            ></Input>
          </View>
          <Text
            style={{
              marginBottom: 7,
              marginTop: 20,
              marginRight: 20,
              marginLeft: 20,
            }}
          >
            Enter Address:
          </Text>
          <View
            style={{
              marginBottom: 7,
              marginRight: 20,
              marginLeft: 20,
            }}
          >
            <Input
              autoCorrect={false}
              onChangeText={(address) => setLocation({ ...location, address })}
            ></Input>
          </View>

          <View>
            <YAButton title="Add Location" handlePress={handleSubmit} />
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default LocationCreate;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flexDirection: "column",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
  },
  mapScreen: {},
  locationForm: {
    flex: 1,
  },
});
