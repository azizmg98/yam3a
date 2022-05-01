import { StyleSheet } from "react-native";
import { Text } from "native-base";

const YATitle = (props) => {
  return (
    <Text {...props} style={styles.title}>
      {props.title}
    </Text>
  );
};

export default YATitle;

const styles = StyleSheet.create({
  title: {
    alignSelf: "flex-start",
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(69, 69, 69, 1)",
    marginBottom: 7,
  },
});
