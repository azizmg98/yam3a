import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LocationListIcon = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Ionicons
        name="location-outline"
        size={30}
        color="#6E876E"
        onPress={() => {
          navigation.navigate("LocationList");
        }}
      />
    </View>
  );
};

export default LocationListIcon;

const styles = StyleSheet.create({});
