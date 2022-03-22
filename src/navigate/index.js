import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../components/auth/Signup";
import Signin from "../components/auth/Signin";
import Signout from "../components/auth/Signout";
import Home from "../components/Home";
import user from "../stores/authStore";
import GuestsList from "../components/users/GuestsList";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    // screenOptions renders options for all screens
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{ headerRight: () => <Signout /> }}
      />
      <Screen name="Signup" component={Signup} />
      <Screen name="Signin" component={Signin} />
      <Screen
        name="GuestList"
        component={GuestsList}
        options={{ headerRight: () => <Signout /> }}
      />
    </Navigator>
  );
};

export default RootNavigator;
