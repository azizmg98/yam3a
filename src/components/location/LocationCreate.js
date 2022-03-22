import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { Image, Input, NativeBaseProvider } from "native-base";
import { useState } from "react/cjs/react.development";
import YAButton from "../shared/YAWideButton";
import locationStore from "../../stores/locationStore";
import { observer } from "mobx-react";

const LocationCreate = () => {
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    console.log("inside handle submit");
    console.log(location);
    locationStore.addLocation(location);
  };

  return (
    <NativeBaseProvider>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1",
          }}
          style={styles.imageStyle}
          alt="Refine location on map"
        />
      </View>
      <View>
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
          Enter Address:{" "}
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
      </View>
      <View>
        {/* <Button style={styles.locationBtn}>Add Location</Button> */}
        <YAButton title="Add Location" onPress={handleSubmit} />
      </View>
    </NativeBaseProvider>
  );
};

export default LocationCreate;

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: "lightgrey",
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  imageStyle: {
    borderRadius: 20,
    width: 300,
    height: 200,
  },
  locationBtn: {
    marginBottom: 20,
    marginTop: 200,
    marginLeft: 20,
    marginRight: 20,
  },
});
