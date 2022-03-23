import { StyleSheet, Text, View } from "react-native";
import { HStack, Avatar } from "native-base";

const YAAvatar = () => {
  return (
    <HStack
      mx={{
        base: "auto",
        md: 0,
      }}
      space={2}
    >
      <Avatar
        source={{
          uri: "https://www.randomlists.com/img/people/tyler_perry.webp",
        }}
      >
        NB
        <Avatar.Badge bg={"red.200"} />
      </Avatar>
      <Avatar
        source={{
          uri: "https://alpha.nativebase.io/img/native-base-icon.png",
        }}
      >
        NB
        <Avatar.Badge borderColor="papayawhip" bg="tomato" />
      </Avatar>
    </HStack>
  );
};

export default YAAvatar;

const styles = StyleSheet.create({});
