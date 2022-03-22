import { StyleSheet, View } from "react-native";
// import { baseURL } from "../../stores/instance";
import {
  Box,
  Heading,
  AspectRatio,
  HStack,
  Text,
  Image,
  Stack,
} from "native-base";

const GuestItem = ({ user }) => {
  return (
    <Box
      shadow="2"
      rounded="lg"
      w={{ base: "93%", md: "80", lg: "md" }}
      _light={{ bg: "coolGray.50" }}
      _dark={{ bg: "gray.700" }}
      m="3"
    >
      {/* <Stack space="2" p="4">
        <Heading size={["md", "lg", "md"]} fontWeight="medium">
        
        </Heading>
      </Stack> */}
      <Text> {user.username}</Text>
    </Box>
  );
};

export default GuestItem;

const styles = StyleSheet.create({});
