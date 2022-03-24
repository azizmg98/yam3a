import { StyleSheet } from "react-native";
import { Image } from "native-base";

const YAImageS = (props) => {
  return (
    <Image
      {...props}
      source={{
        uri: "https://wallpaperaccess.com/full/317501.jpg",
      }}
      alt="Alternate Text"
      size="md"
      resizeMode="cover"
      borderRadius="7"
    />
  );
};

export default YAImageS;

const styles = StyleSheet.create({});
