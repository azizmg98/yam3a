import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../components/auth/Signup";
import Signin from "../components/auth/Signin";
import Home from "../components/Home";
import LocationCreate from "../components/location/LocationCreate";
import LocationList from "../components/location/LocationList";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    // screenOptions renders options for all screens
    <Navigator initialRouteName="LocationCreate" screenOptions={{}}>
      <Screen name="Home" component={Home} options={{}} />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="LocationCreate"
        options={{ headerTitle: "Add New Location" }}
        component={LocationCreate}
      />
      <Screen
        name="LocationList"
        options={{ headerTitle: "My Locations" }}
        component={LocationList}
      />
    </Navigator>
  );
};

export default RootNavigator;
