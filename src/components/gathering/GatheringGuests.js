import { StyleSheet, Text, View } from "react-native";
import { ScrollView, HStack } from "native-base";

const GatheringGuests = ({ guest }) => {
  return (
    <View>
      <ScrollView>
        <HStack>
          <Text>
            {guest.user.username} {guest.status}
          </Text>
        </HStack>
      </ScrollView>
    </View>
  );
};

export default GatheringGuests;

const styles = StyleSheet.create({});
