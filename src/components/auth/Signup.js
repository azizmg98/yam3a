import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import styles from "../shared/Styles";
import YATextInput from "../shared/YATextInput";
import YAButton from "../shared/YAButton";
import { useState } from "react";
import authStore from "../../stores/authStore";

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
  const handleSubmit = async () => {
    if (isPasswordMatch) {
      await authStore.signup(user);
      navigation.navigate("Home");
    } else {
      Alert.alert("password mismatch");
    }
  };

  return (
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
            placeholder="confirm password"
            secureTextEntry={true}
            onChangeText={(cpassword) => confirmPassword(cpassword)}
          />
          <YATextInput
            placeholder="phone"
            keyboardType="numeric"
            onChangeText={(phone) => setUser({ ...user, phone })}
          />
          <YAButton onPress={handleSubmit} title="Sign up" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signup;

StyleSheet.create({});
