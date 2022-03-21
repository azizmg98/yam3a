import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../components/auth/Signup";
import Home from "../components/Home";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    // screenOptions renders options for all screens
    <Navigator initialRouteName="Home" screenOptions={{}}>
      <Screen name="Home" component={Home} options={{}}/>
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
};

export default RootNavigator;
