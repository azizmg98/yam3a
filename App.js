import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigate";
import "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import { AppRegistry, Platform } from "react-native";
import { name as appName } from "./app.json";
import NavBar from "./src/navigate/NavBar";

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
        <NavBar />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
