import { StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddLocationIcon = () => {
  const navigation = useNavigation();

  return (
    <View>
      <MaterialIcons
        style={styles.addLocationIcon}
        name="add-location-alt"
        size={27}
        color="#6E876E"
        onPress={() => navigation.navigate("LocationCreate")}
      />
    </View>
  );
};

export default AddLocationIcon;

const styles = StyleSheet.create({
  addLocationIcon: {
    marginRight: 15,
    marginBottom: 2,
  },
});
