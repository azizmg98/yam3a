import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CreateGatheringIcon = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Ionicons
        style={styles.createGatheringIcon}
        name="md-add-circle"
        size={70}
        color="#6320EE"
        onPress={() => {
          navigation.navigate("GatheringCreate");
        }}
      />
    </View>
  );
};

export default CreateGatheringIcon;

const styles = StyleSheet.create({
  createGatheringIcon: {
    position: "absolute",
    marginTop: -43,
    alignSelf: "center",
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});
