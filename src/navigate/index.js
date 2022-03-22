import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../components/auth/Signup";
import Signin from "../components/auth/Signin";
import Signout from "../components/auth/Signout";
import Home from "../components/Home";
import user from "../stores/authStore";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    // screenOptions renders options for all screens
    <Navigator initialRouteName="Signin" screenOptions={{}}>
      <Screen
        name="Home"
        component={Home}
        options={{ headerRight: () => <Signout /> }}
      />
      <Screen name="Signup" component={Signup} />
      <Screen name="Signin" component={Signin} />
    </Navigator>
  );
};

export default RootNavigator;
