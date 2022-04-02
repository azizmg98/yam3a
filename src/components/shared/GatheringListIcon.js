import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const GatheringListIcon = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Ionicons
        name="md-list-circle-outline"
        size={30}
        color="#6E876E"
        onPress={() => {
          navigation.navigate("GatheringList");
        }}
      />
    </View>
  );
};

export default GatheringListIcon;

const styles = StyleSheet.create({});
