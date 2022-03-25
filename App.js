import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import RootNavigator from "./src/navigate";
import "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import { AppRegistry, Platform } from "react-native";
import { name as yam3a } from "./app.json";
import NavBar from "./src/navigate/NavBar";

// import App from "./Screen";

AppRegistry.registerComponent("yam3a", () => App);

function App() {
  if (Platform.OS === "web") {
    const rootTag = document.getElementById("root");
    AppRegistry.runApplication("yam3a", { rootTag });
  }
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <RootNavigator/> */}
        <NavBar />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
