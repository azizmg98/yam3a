import { StyleSheet } from "react-native";
import { HStack, Avatar } from "native-base";

const YAAvatar = (props) => {
  return (
    <Avatar
      {...props}
      source={{
        uri: "https://www.randomlists.com/img/people/tyler_perry.webp",
      }}
    >
      NB
      <Avatar.Badge bg={"red.200"} />
    </Avatar>
  );
};

export default YAAvatar;

const styles = StyleSheet.create({});
