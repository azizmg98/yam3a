import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../components/auth/Signup";
import Signin from "../components/auth/Signin";
import Signout from "../components/auth/Signout";
import Home from "../components/Home";
import GatheringList from "../components/gathering/GatheringList";
import LocationCreate from "../components/location/LocationCreate";
import LocationList from "../components/location/LocationList";
import GuestsList from "../components/users/GuestsList";
import GatheringDetail from "../components/gathering/GatheringDetail";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    // screenOptions renders options for all screens
    <Navigator initialRouteName="GatheringList" screenOptions={{}}>
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
        component={LocationCreate}
        options={{ headerShown: false }}
      />
      <Screen
        name="GatheringList"
        options={{ headerTitle: "Hosted Gatherings", headerLeft: false }}
        component={GatheringList}
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

      <Screen
        name="GatheringDetail"
        component={GatheringDetail}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigator;
