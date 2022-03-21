import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import styles from "../styles";
import { useState } from "react";
import authStore from "../../stores/authStore";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    phone: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Regestration</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={(username) => setUser({ ...user, username })}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => setUser({ ...user, password })}
        ></TextInput>
        <TextInput
          style={styles.textInput}
          placeholder="phone"
          keyboardType="numeric"
          onChangeText={(phone) => setUser({ ...user, phone })}
        ></TextInput>
        <Button
          color="rgba(99, 32, 238, 1)"
          onPress={handleSubmit}
          title="Sign up"
        />
      </View>
    </View>
  );
};

export default Signup;

StyleSheet.create({});
