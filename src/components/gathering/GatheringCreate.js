import React, { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import authStore from "../../stores/authStore";
import gatheringStore from "../../stores/gatheringStore";
// import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
import { Button, VStack, Input, HStack } from "native-base";
import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
import moment from "moment";
import LocationCreate from "../location/LocationCreate";
import { observer } from "mobx-react";

const GatheringCreate = ({ navigation }) => {
  const user = authStore.user;
  //   const [image1, setImage] = useState(null);

  const [gatheringCreate, setGatheringCreate] = useState({
    title: "",
    // date: "",
    time: "",
    image: "",
  });

  ////Date-Time Picker

  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const handleCreate = () => {
    if (date) {
      () => gatheringStore.gatheringCreate(gatheringCreate);
      setIsPickerShow(false);
    }
  };

  const onChange = (event, value) => {
    setDate(value);
    console.log(value);
    if (Platform.OS === "android") {
      setIsPickerShow(false);
    }
  };
  //   gatheringCreate.image = image1;
  //   const pickImage = async () => {
  //     // No permissions request is necessary for launching the image library
  //     let result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       allowsEditing: true,
  //       aspect: [4, 3],
  //       quality: 1,
  //     });

  //     console.log(result);

  //     if (!result.cancelled) {
  //       setImage(result.uri);
  //     }
  //   };

  return (
    // <TouchableOpacity onPress={Keyboard.dismiss} accessible={false}>
    <View
      style={{
        alignSelf: "center",
        marginTop: 100,
      }}
    >
      <Text category="h4" style={{ marginBottom: 10 }}>
        Create a gathering
      </Text>

      <DatePicker
        defaultDate={moment().format("YYYY-MM-DD")}
        onDateChange={(value) => console.log("date changed to " + value)}
        textStyle={{
          paddingVertical: 15,
          paddingHorizontal: 10,
          borderColor: "grey",
          borderWidth: 1,
        }}
      />

      <TimePicker
        defaultTime={moment().format("LT")}
        onDateChange={(value) => console.log("time changed to " + value)}
        textStyle={{
          paddingVertical: 15,
          paddingHorizontal: 10,
          borderColor: "grey",
          borderWidth: 1,
        }}
      />
      {/* <Pressable onPress={pickImage}>
          {image1 ? (
            <Image
              source={{
                uri: image1.includes("file") ? image1 : baseUrl + image1,
              }}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
          ) : (
            <Image
              source={require("")}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
          )}
        </Pressable> */}
      <Text style={{ marginTop: 20, marginBottom: 7 }}>
        Add Gathering Title
      </Text>
      <Input
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
          marginTop: 10,
        }}
        placeholder="Gathering Title"
        value={gatheringCreate.title}
        onChangeText={(nextValue) =>
          setGatheringCreate({ ...gatheringCreate, title: nextValue })
        }
      />

      {/* <Text style={styles.pickedDate}>{date.toUTCString()}</Text> */}
      <HStack style={styles.actionRow}>
        <Button
          variant="ghost"
          _text={{ color: "#6320EE" }}
          onPress={() => navigation.navigate("LocationList")}
        >
          + Add Location
        </Button>
      </HStack>
      <Button
        style={{
          marginTop: 20,
          alignSelf: "center",
          width: Dimensions.get("window").width - 40,
        }}
        status="danger"
        appearance="outline"
        onPress={
          handleCreate
          // () => gatheringStore.gatheringCreate(gatheringCreate)
          //  gatheringStore.gatheringCreate(user._id, gatheringCreate)
        }
      >
        Create
      </Button>
    </View>
    // </TouchableOpacity>
  );
};

export default observer(GatheringCreate);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 50,
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
  actionRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
