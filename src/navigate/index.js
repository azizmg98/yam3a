import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../components/auth/Signup";
import Signin from "../components/auth/Signin";
import Signout from "../components/auth/Signout";
import Home from "../components/Home";
import GatheringList from "../components/gathering/GatheringList";
import LocationCreate from "../components/location/LocationCreate";
import LocationList from "../components/location/LocationList";
import user from "../stores/authStore";
import GuestsList from "../components/users/guest/GuestsList";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    // screenOptions renders options for all screens

    <Navigator initialRouteName="Signin" screenOptions={{}}>
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

      <Screen
        name="Home"
        component={Home}
        options={{ headerRight: () => <Signout /> }}
      />

      <Screen
        name="GuestList"
        component={GuestsList}
        options={{ headerRight: () => <Signout /> }}
      />
    </Navigator>
  );
};

export default RootNavigator;
