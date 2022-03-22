import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import styles from "../shared/Styles";
import YATextInput from "../shared/YATextInput";
import YAButton from "../shared/YAWideButton";
import { useState } from "react";
import authStore from "../../stores/authStore";
import { NativeBaseProvider } from "native-base";

const Signup = ({ route, navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    phone: "",
  });
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const confirmPassword = (cpassword) => {
    if (user.password === cpassword) {
      setIsPasswordMatch(true);
    } else {
      setIsPasswordMatch(false);
    }
  };
  const handleSubmit = () => {
    if (isPasswordMatch) {
      authStore.signup(user, navigation);
    } else {
      Alert.alert("password mismatch");
    }
  };

  return (
    <NativeBaseProvider>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.title}>Registration</Text>
            <YATextInput
              placeholder="Username"
              onChangeText={(username) => setUser({ ...user, username })}
            />
            <YATextInput
              placeholder="password"
              secureTextEntry={true}
              onChangeText={(password) => setUser({ ...user, password })}
            />
            <YATextInput
              placeholder="Confirm password"
              secureTextEntry={true}
              onChangeText={(cpassword) => confirmPassword(cpassword)}
            />
            <YATextInput
              placeholder="Phone"
              keyboardType="numeric"
              onChangeText={(phone) => setUser({ ...user, phone })}
            />
            <YAButton handlePress={handleSubmit}>Sign Up</YAButton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </NativeBaseProvider>
  );
};

export default Signup;

StyleSheet.create({});
