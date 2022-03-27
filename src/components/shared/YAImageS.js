import { StyleSheet } from "react-native";
import { Image } from "native-base";

const YAImageS = (props) => {
  return (
    <Image
      {...props}
      source={{
        uri: props.uri || "https://wallpaperaccess.com/full/317501.jpg",
      }}
      alt="Alternate Text"
      size="md"
      style={styles.gatheringImage}
    />
  );
};

export default YAImageS;

const styles = StyleSheet.create({
  gatheringImage: {
    borderRadius: 7,
  },
});
