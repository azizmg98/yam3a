// import { StyleSheet, Text, View, Dimensions } from "react-native";
// import React from "react";
// import { Image, Input, NativeBaseProvider } from "native-base";
// import MapView, { Marker, Callout } from "react-native-maps";
// import { useState } from "react/cjs/react.development";
// import locationStore from "../../stores/locationStore";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// const MapScreen = () => {
//   const [location, setLocation] = useState();
//   const [pin, setPin] = useState({ latitude: 29.378586, longitude: 47.990341 });

//   const handleSubmit = () => {
//     console.log("inside handle submit");
//     console.log(location);
//     locationStore.addLocation(location);
//   };
//   return (
//     <NativeBaseProvider>
//       <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           initialRegion={{
//             latitude: 29.378586,
//             longitude: 47.990341,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           provider="google"
//         >
//           <View style={styles.searchContainer}>
//             <GooglePlacesAutocomplete
//               placeholder="Search"
//               fetchDetails={true}
//               GooglePlacesSearchQuery={{
//                 rankby: "distance",
//               }}
//               onPress={(data, details = null) => {
//                 console.log(data, details);
//               }}
//               query={{
//                 key: `AIzaSyBymxkNtegpiXRziSZU85FfBWCcYi5xY_Y`,
//                 language: "en",
//               }}
//               currentLocation={true}
//               currentLocationLabel="Current location"
//             />
//           </View>
//           <Marker
//             coordinate={pin}
//             draggable={true}
//             onDragStart={(e) => {
//               console.log("Drag Start", e.nativeEvent.coordinate);
//             }}
//             onDragEnd={(e) => {
//               setPin({
//                 latitude: e.nativeEvent.coordinate.latitude,
//                 longitude: e.nativeEvent.coordinate.longitude,
//               });
//             }}
//           >
//             <Callout>
//               <Text>You Are Here</Text>
//             </Callout>
//           </Marker>
//         </MapView>
//       </View>
//     </NativeBaseProvider>
//   );
// };

// export default MapScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ffff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   map: {
//     width: Dimensions.get("window").width / 1.12,
//     height: Dimensions.get("window").height / 2.5,
//     borderRadius: 20,
//   },
//   searchContainer: {
//     marginTop: 20,
//     marginLeft: 20,
//     marginRight: 20,
//   },
// });
