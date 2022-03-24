import { StyleSheet } from "react-native";
import { Text } from "native-base";

const YAText = (props) => {
  return <Text {...props}>{props.title}</Text>;
};

export default YAText;

const styles = StyleSheet.create({});
