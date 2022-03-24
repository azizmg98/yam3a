import { StyleSheet, Dimensions } from "react-native";
import { Button } from "native-base";

// destructor props later
const YAWideButton = ({ children, ...props }) => {
  return (
    <Button mt={props.mt} onPress={props.handlePress} style={styles.button}>
      {children || props.title}
    </Button>
  );
};

export default YAWideButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(99, 32, 238, 1)",
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
});
