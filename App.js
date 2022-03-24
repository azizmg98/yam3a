import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RootNavigator from "./src/navigate";
import "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import { AppRegistry, Platform } from "react-native";
import { name as appName } from "./app.json";
// import App from "./Screen";

AppRegistry.registerComponent(appName, () => App);

function App() {
  if (Platform.OS === "web") {
    const rootTag = document.getElementById("root");
    AppRegistry.runApplication(appName, { rootTag });
  }
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
