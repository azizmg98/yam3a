import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useState } from "react";
import authStore from "../../stores/authStore";
import gatheringStore from "../../stores/gatheringStore";
import {
  Button,
  VStack,
  Input,
  HStack,
  FormControl,
  Center,
  Image,
  ScrollView,
} from "native-base";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import moment from "moment";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import YAWideButton from "../shared/YAWideButton";
import locationStore from "../../stores/locationStore";
import * as ImagePicker from "expo-image-picker";
import { observer } from "mobx-react";

const GatheringCreate = ({ navigation }) => {
  // fetching all required variables:

  const user = authStore.user;
  const gatheringLocation = locationStore.gatheringLocation;

  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const [image, setImage] = useState(null);
  const [show, setShow] = useState(false);
  const [loc, setLoc] = useState("");
  const [newGathering, setNewGathering] = useState({
    host: user._id,
    title: "",
    date: moment().format("dddd - Do MM, YYYY"),
    time: moment().format("LT"),
    location: gatheringLocation,
    image: "https://i.redd.it/zemm8u5nzqd21.png",
  });

  const showPicker = () => {
    setIsPickerShow(true);
  };
  const handleCreate = () => {
    gatheringStore.createGatheringimage(newGathering, navigation);
  };

  const pickImage = async (image) => {
    console.log("Im Clicked");
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
      setImage({ uri, name: `photo.${fileType}`, type: `image/${fileType}` });
      setNewGathering({
        ...newGathering,
        image: { uri, name: `photo.${fileType}`, type: `image/${fileType}` },
      });
    }
  };
  console.log("loc =");
  console.log(gatheringLocation?.title);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleBar}>
          <Ionicons
            name="chevron-back-outline"
            size={24}
            color="#52575D"
            onPress={() => navigation.navigate("GatheringList")}
          ></Ionicons>
        </View>
        <Text style={styles.header}>Create a gathering</Text>
        <Text style={styles.subHeader}>Add Gathering Title</Text>
        <Input
          placeholder="Gathering Title"
          autoCorrect={false}
          onChangeText={(gatheringTitle) =>
            setNewGathering({ ...newGathering, title: gatheringTitle })
          }
        />
        <Text style={styles.subHeader}>Select Date & Time</Text>
        <HStack style={styles.dateTimeRows}>
          <View style={styles.onePicker}>
            <VStack>
              <AntDesign name="calendar" size={21} color="#9A9797" />
            </VStack>

            <VStack>
              <DatePicker
                defaultDate={moment().format("YYYY-MM-DD")}
                onDateChange={(gatheringDate) =>
                  setNewGathering({
                    ...newGathering,
                    date: moment(gatheringDate).format("dddd - Do MM, YYYY"),
                  })
                }
                textStyle={styles.pickers}
              />
            </VStack>
          </View>
          <View style={styles.onePicker}>
            <VStack>
              <Ionicons name="time-outline" size={22} color="#9A9797" />
            </VStack>
            <VStack>
              <TimePicker
                defaultTime={moment().format("LT")}
                onTimeChange={(time) =>
                  setNewGathering({
                    ...newGathering,
                    time: moment(time).format("LT"),
                  })
                }
                textStyle={styles.pickers}
                // borderColor: "grey",
                // borderWidth: 1,
              />
            </VStack>
          </View>
        </HStack>
        <HStack style={styles.actionRow}>
          <Button
            variant="ghost"
            _text={{ color: "#6320EE" }}
            onPress={() => navigation.navigate("LocationList", setLoc)}
          >
            + Add Location
          </Button>
        </HStack>
        <View style={styles.addressArea}>
          <HStack>
            <Text style={styles.text}>{gatheringLocation?.title}</Text>
          </HStack>
          <HStack>
            <Text style={styles.text}>{gatheringLocation?.address}</Text>
          </HStack>
        </View>
        <HStack style={styles.actionRow}>
          <FormControl>
            <Center>
              {image ? (
                <Image
                  source={{ uri: image.uri }}
                  alt="trip image"
                  // size="2xl"
                  width={20}
                  height={20}
                  mb={3}
                  rounded={20}
                />
              ) : null}
            </Center>
            {image === null ? (
              <Button
                variant="ghost"
                _text={{ color: "#6320EE" }}
                onPress={pickImage}
              >
                + Add Image
              </Button>
            ) : (
              <Button
                onPress={() => pickImage(image)}
                mt="0"
                colorScheme="red"
                variant="outline"
              >
                Replace Image
              </Button>
            )}
          </FormControl>
     
        </HStack>

        <HStack style={{ marginTop: 20 }}>
          <YAWideButton
            title="Create"
            handlePress={
              handleCreate
            }
          />
        </HStack>
      </View>
    </ScrollView>
  );
};

export default observer(GatheringCreate);

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: "center",
    backgroundColor: "#F4F6F4",
    height: Dimensions.get("window").height,
  },
  header: {
    color: "#454545",
    fontSize: 20,
    // fontFamily: "Helvetica-Bold",
    // fontFamily: "Verdana-Bold",
    textTransform: "uppercase",
    alignSelf: "center",
    marginBottom: 20,
  },
  subHeader: {
    marginTop: 20,
    fontFamily: "Verdana",
    fontSize: 14,
    height: 30,
    textAlignVertical: "center",
    color: "#454545",
  },
  pickedDateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: Dimensions.get("window").width - 40,
    alignSelf: "center",
    backgroundColor: "lightgrey",
    height: 50,
    borderRadius: 5,
  },
  pickedDate: {
    fontSize: 18,
    color: "black",
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  dateTimeRows: {
    flexDirection: "column",
    alignSelf: "center",
  },
  pickers: {
    marginLeft: 7,
    marginRight: 30,
    fontFamily: "Verdana",
    color: "#454545",
    fontSize: 14,
  },
  onePicker: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E0E0E0",
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 3,
    paddingLeft: 7,
    height: 30,
    width: Dimensions.get("window").width - 40,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  text: {
    // fontFamily: "Verdana-Italic",
    fontSize: 14,
    textAlignVertical: "center",
    color: "#454545",
    // color: "#9A9797",
  },
  addressArea: {
    height: 80,
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 0.2,
    shadowColor: "#E0E0E0",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});
