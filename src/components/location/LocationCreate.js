import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { Input, NativeBaseProvider } from "native-base";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Marker, Callout } from "react-native-maps";

// importing styling shared components:
import YAWideButton from "../shared/YAWideButton";

// importing Stores:
import locationStore from "../../stores/locationStore";

const LocationCreate = () => {
  const [address, setAddress] = useState();
  const [pin, setPin] = useState({ latitude: 29.378586, longitude: 47.990341 });

  const handleSubmit = () => {
    if (!address.title && !address.add) {
      alert("Kindly fill all boxes to add an Location");
    } else {
      locationStore.addLocation(address, pin);
    }
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container1}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 29.378586,
            longitude: 47.990341,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider="google"
        >
          <View style={styles.searchContainer}>
            <GooglePlacesAutocomplete
              placeholder="Search"
              fetchDetails={true}
              GooglePlacesSearchQuery={{
                rankby: "distance",
              }}
              onPress={(data, details = null) => {
              }}
              query={{
                key: `AIzaSyBymxkNtegpiXRziSZU85FfBWCcYi5xY_Y`,
                language: "en",
              }}
            />
          </View>
          <Marker
            coordinate={pin}
            draggable={true}
            onDragStart={(e) => {
            }}
            onDragEnd={(e) => (
              setPin(e.nativeEvent.coordinate)
            )}
          >
            <Callout>
              <Text>You Are Here</Text>
            </Callout>
          </Marker>
        </MapView>
      </View>
      <View style={styles.container2}>
        <View style={styles.locationForm}>
          <Text
            style={{
              marginBottom: 7,
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
              onChangeText={(title) => setAddress({ ...address, title })}
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
              onChangeText={(add) => setAddress({ ...address, add })}
            ></Input>
          </View>

          <View>
            <YAWideButton title="Add Location" handlePress={handleSubmit} />
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default LocationCreate;

const styles = StyleSheet.create({
  container1: {
    marginTop: 20,
    backgroundColor: "#F4F6F4",
    alignItems: "center",
  },
  map: {
    width: Dimensions.get("window").width / 1.12,
    height: Dimensions.get("window").height / 2.5,
    borderRadius: 20,
  },
  searchContainer: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    width: 300,
  },
  container2: {
    marginTop: 30,
    flexDirection: "column",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flexDirection: "column",
    backgroundColor: "#F4F6F4",
    justifyContent: "center",
    alignContent: "center",
  },
  locationForm: {
    flex: 1,
  },
  page: {
    backgroundColor: "#F4F6F4",
    height: Dimensions.get("window").height,
  },
});
