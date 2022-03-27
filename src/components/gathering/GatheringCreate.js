import React, { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import authStore from "../../stores/authStore";
import gatheringStore from "../../stores/gatheringStore";
// import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
import { Button, VStack, Input } from "native-base";

const GatheringCreate = () => {
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
        flex: 1,
        paddingTop: "10",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text category="h4" style={{ marginBottom: 10 }}>
        Create a gathering
      </Text>
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
      <VStack>
        <View style={styles.pickedDateContainer}>
          <Text style={styles.pickedDate}>{date.toUTCString()}</Text>
        </View>
        {!isPickerShow && (
          <Text style={styles.btnContainer}>
            <Button title="Show Picker" color="purple" onPress={showPicker}>
              Update
            </Button>
          </Text>
        )}
        {/* The date picker  */}
        {/* The date picker */}
        {isPickerShow && (
          <DateTimePicker
            value={date}
            mode={"date"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={onChange}
            style={styles.datePicker}
          />
        )}
      </VStack>
      <Button
        style={{
          // marginLeft: "auto",
          // marginRight: "auto",
          marginTop: 30,
          width: "90%",
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

export default GatheringCreate;

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
    padding: 20,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: "black",
  },
  btnContainer: {
    padding: 30,
    height: 30,
    width: 30,
    color: "white",
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
});
