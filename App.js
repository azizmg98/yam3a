import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RootNavigator from "./src/navigate";
import "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
