import { StyleSheet, Text, View } from "react-native";
import { ScrollView, HStack } from "native-base";
import React from "react";

const GatheringGuests = ({ guest }) => {
  console.log(guest);
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
