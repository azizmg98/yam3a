import { StyleSheet } from "react-native";
import { Text } from "native-base";

const YAText = ({ children, ...props }) => {
  return <Text {...props}>{children || props.title}</Text>;
};

export default YAText;

const styles = StyleSheet.create({});
