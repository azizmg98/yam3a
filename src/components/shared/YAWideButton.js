import { StyleSheet } from "react-native";
import { Button, NativeBaseProvider } from "native-base";

// destructor props later
const YAButton = ({ children, ...props }) => {
  return (
    <Button mt={props.mt} onPress={props.handlePress} style={styles.button}>
      {children || props.title}
    </Button>
  );
};

export default YAButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    color: "rgba(99, 32, 238, 1)",
    backgroundColor: "rgba(99, 32, 238, 1)",
    textAlign: "center",
  },
});
