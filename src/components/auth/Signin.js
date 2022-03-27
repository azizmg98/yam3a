import React, { useState } from "react";
import authStore from "../../stores/authStore";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Button,
  Box,
  VStack,
  HStack,
  Heading,
  FormControl,
  Center,
  Input,
  Link,
  NativeBaseProvider,
} from "native-base";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "", phone: "" });

  const handleSubmit = () => {
    authStore.signin(user, navigation);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <NativeBaseProvider>
        <Center w="100%" style={{ backgroundColor: "white", height: "100%" }}>
          {/* <Image
          source={require("../../assets/istockphoto.jpeg")}
          style={styles.image}
        /> */}
          <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading
              size="lg"
              fontWeight="600"
              alignSelf="center"
              // marginTop="150"
              padding="1"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
            >
              Welcome To Yam3a
            </Heading>
            <Heading
              mt="1"
              alignSelf="center"
              _dark={{
                color: "warmGray.200",
              }}
              color="coolGray.600"
              fontWeight="medium"
              size="xs"
            >
              Sign in to continue!
            </Heading>

            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Username</FormControl.Label>
                <Input
                  autoCapitalize="none"
                  onChangeText={(username) => setUser({ ...user, username })}
                />
              </FormControl>

              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  type="password"
                  onChangeText={(password) => setUser({ ...user, password })}
                />
                {/* <Text
                  onPress={() => navigation.navigate("ForgetPassword")}
                  style={styles.pass}
                  _text={{
                    fontSize: "xs",
                    fontWeight: "500",
                    color: "indigo.500",
                  }}
                  alignSelf="flex-end"
                  mt="1"
                >
                  Forget Password?
                </Text> */}
              </FormControl>
              <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
                Sign in
              </Button>
              <HStack mt="6" justifyContent="center">
                <Text
                  fontSize="sm"
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  I'm a new user.{" "}
                </Text>
                <Text
                  style={styles.link}
                  onPress={() => navigation.navigate("Signup")}
                  _text={{
                    color: "indigo.500",
                    fontWeight: "medium",
                    fontSize: "sm",
                  }}
                  href="#"
                >
                  Sign Up
                </Text>
              </HStack>
            </VStack>
          </Box>
        </Center>
      </NativeBaseProvider>
    </TouchableWithoutFeedback>
  );
};

export default Signin;

const styles = StyleSheet.create({
  image: {
    height: "20%",
    width: "20%",
  },
  link: {
    textDecorationLine: "underline",
    color: "#6366F1",
  },

  pass: {
    textDecorationLine: "underline",
    color: "#6320EE",
    marginLeft: "57%",
  },
});
