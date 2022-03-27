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

import GatheringDetail from "../components/gathering/GatheringDetail";
import YAAvatar from "../components/shared/YAAvatar";
import YAHostProfileIcon from "../components/shared/YAHostProfileIcon";
import UserProfile from "../components/users/UserProfile";
import AddLocationIcon from "../components/shared/AddLocationIcon";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    // screenOptions renders options for all screens
    <Navigator initialRouteName="Signin" screenOptions={{}}>
      <Screen
        name="Signup"
        component={Signup}
        // options={{ headerShown: false }}
      />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="LocationCreate"
        component={LocationCreate}
        options={{ headerTitle: "Add New Location" }}
      />
      <Screen
        name="GatheringList"
        options={{
          headerTitle: "Hosted Gatherings",
          headerLeft: () => <YAHostProfileIcon />,
          headerRight: () => <Signout />,
        }}
        component={GatheringList}
      />

      <Screen
        name="LocationList"
        options={{
          headerTitle: "My Locations",
          headerLeft: () => <YAHostProfileIcon />,
          headerRight: () => <AddLocationIcon />,
          gestureDirection: "horizontal-inverted",
        }}
        component={LocationList}
      />

      <Screen
        name="UserProfile"
        options={{
          headerTitle: "My Profile",
          headerLeft: false,
          headerShown: false,
        }}
        component={UserProfile}
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
