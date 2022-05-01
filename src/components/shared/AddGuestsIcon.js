import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddGuestsIcon = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Feather
        name="users"
        style={styles.addGuestsIcon}
        size={27}
        color="#6E876E"
        onPress={() => navigation.navigate("GuestList")}
      />
    </View>
  );
};

export default AddGuestsIcon;

const styles = StyleSheet.create({});
