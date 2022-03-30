import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Signout from "../auth/Signout";
import authStore from "../../stores/authStore";
import { baseURL } from "../../stores/instance";
import { observer } from "mobx-react-lite";
import gatheringStore from "../../stores/gatheringStore";
import YATitle from "../shared/YATitle";
import { Box, Button, HStack, VStack } from "native-base";
import YAText from "../shared/YAText";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const UserProfile = ({ navigation }) => {
  const user = authStore.user;

  const [image, setImage] = useState(null);

  const pickImage = async (image) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    let uriParts = result.uri.split(".");
    let fileType = uriParts[uriParts.length - 1];
    let uri = result.uri;
    if (!result.cancelled) {
      setImage({
        uri,
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
      });
      user.image = {
        uri,
        name: `photo.${fileType}`,
        type: `image/${fileType}`,
      };
      authStore.uploadProfileImage(user);
    }
  };

  const userGatherings = gatheringStore.hostedGatherings.map((gathering) => (
    <View style={styles.cardContainer}>
      <Box style={styles.box}>
        <HStack style={styles.topRow}>
          <VStack>
            <Image
              source={{ uri: baseURL + gathering.image }}
              style={styles.gatheringImage}
              resizeMode="cover"
            ></Image>
          </VStack>
          <VStack>
            <YATitle title={gathering.title} />
            <HStack>
              <VStack>
                <AntDesign name="calendar" size={21} color="#9A9797" />
              </VStack>
              <VStack>
                <YAText style={styles.text} title="Friday, March 25" />
              </VStack>
              <VStack>
                <Ionicons name="time-outline" size={22} color="#9A9797" />
              </VStack>
              <VStack>
                <Text style={styles.text} color={"grey"}>
                  {gathering.time}
                </Text>
              </VStack>
            </HStack>
            <HStack style={styles.locationRow}>
              <VStack>
                <Ionicons name="location-outline" size={22} color="#9A9797" />
              </VStack>
              <VStack>
                <Text style={styles.text}>
                  Free Zone, Shuwaikh, Block 9, Street 79, CODED Campus
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </HStack>
        <View>
          <HStack style={styles.hLine}></HStack>
        </View>
        <HStack style={styles.actionRow}>
          <Button variant="ghost" _text={{ color: "#FF0000" }}>
            Cancel
          </Button>
        </HStack>
      </Box>
    </View>
  ));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color="#52575D"
            onPress={() => navigation.navigate("GatheringList")}
          ></Ionicons>
          <Signout />
        </View>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            {!image ? (
              <Image
                source={{ uri: baseURL + user.image }}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            ) : (
              <Image
                source={{ uri: image.uri }}
                style={styles.image}
                resizeMode="cover"
              ></Image>
            )}
          </View>
          <View>
            <Ionicons
              style={styles.editImage}
              name="md-add-circle"
              size={50}
              color="#6E876E"
              onPress={() => pickImage()}
            />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
            {user.username}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.bio}>
            <View style={{ width: 307 }}></View>
          </View>
        </View>
        <View style={{ marginLeft: 30, marginTop: 20 }}>
          <YATitle title="My Gatherings" />
        </View>
        <View style={styles.scrollBar}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {userGatherings}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(UserProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F4",
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  subText: {
    fontSize: 18,
    color: "#454545",
    textTransform: "uppercase",
    fontWeight: "500",
  },

  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },
  dm: {
    backgroundColor: "#41444B",
    top: 20,
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    position: "relative",
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  image: {
    flex: 1,
    width: 200,
    height: 200,
  },
  imageText: {
    position: "absolute",
    bottom: 0,
    paddingLeft: 10,
    width: "100%",
    height: "20%",
    paddingTop: 4,
    color: "black",
    backgroundColor: "rgba(255,255,255,0.6), transparent",
  },
  gatheringList: {
    shadowColor: "black",
    shadowRadius: 2,
    backgroundColor: "white",
    borderRadius: 12,
    borderColor: "black",
    width: Dimensions.get("window").width - 35,
    alignSelf: "center",
    height: 30,
    paddingLeft: 40,
    marginTop: 20,
    marginBottom: 10,
  },
  aboutMeTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 30,
  },
  bio: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  bioIndicator: {
    backgroundColor: "#CABFAB",
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 6,
    marginTop: 3,
    marginRight: 20,
  },
  editImage: {
    position: "absolute",
    top: -200,
    right: -10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollBar: {
    marginTop: 10,
    shadowColor: "lightgrey",
    shadowOpacity: 8,
    shadowRadius: 20,
  },
  cardContainer: {
    width: Dimensions.get("window").width,
  },
  box: {
    width: Dimensions.get("window").width - 30,
    shadowColor: "black",
    shadowRadius: 2,
    backgroundColor: "white",
    borderRadius: 12,
    borderColor: "black",
    height: 200,
    alignSelf: "center",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  topRow: {
    marginBottom: 10,
    height: "50%",
  },
  guestList: {
    flexDirection: "row",
    alignItems: "center",
    height: "50%",
  },
  locationRow: {
    marginTop: 7,
    width: 220,
  },
  text: {
    color: "#9A9797",
    marginLeft: 3,
    marginRight: 12,
  },
  hLine: {
    borderBottomColor: "#ECEBEB",
    borderBottomWidth: 1,
    bottom: -40,
  },
  vLine: {
    borderRightColor: "#ECEBEB",
    borderRightWidth: 1,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    bottom: -45,
  },
  btns: {
    height: 20,
    width: "40%",
    backgroundColor: "white",
  },
  gatheringImage: {
    borderRadius: 7,
    width: 83,
    height: 83,
    marginRight: 7,
  },
});
