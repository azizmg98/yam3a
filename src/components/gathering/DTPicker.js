import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  Platform,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const DTPicker = (props) => {
  const { textStyle, defaultDate } = props;
  const [date, setDate] = useState(moment().format("LLLL"));
  const [show, setShow] = useState(false);

  const onChange = (e, selectedDate) => {
    console.log("onChange TimePicker " + moment(selectedDate).format("LLLL"));
    setDate(moment(selectedDate).format("LLLL"));
    console.log("LOG DATE " + date);
  };

  const onPressCancel = () => {
    setDate(moment(defaultDate).format("LLLL"));
    setShow(false);
  };
  const onPressDone = () => {
    console.log("onPressDone " + date);
    props.onDateChange(date);
    setShow(false);
  };

  return (
    <TouchableHighlight activeOpacity={0} onPress={() => setShow(true)}>
      <View>
        <Text style={textStyle}>{date}</Text>
        <Modal
          transparent={true}
          animationType="slide"
          visible={show}
          supportedOrientations={["portrait"]}
          onRequestClose={() => setShow(false)}
        >
          <View style={{ flex: 1 }}>
            <TouchableHighlight
              style={{ flex: 1, alignItems: "flex-end", flexDirection: "row" }}
              activeOpacity={1}
              visible={show}
              onPress={() => setShow(false)}
            >
              <TouchableHighlight
                underlayColor={"#FFFFF"}
                style={{
                  flex: 1,
                  borderTopColor: "#E9E9E9",
                  borderTopWidth: 1,
                }}
                onPress={() => console.log("timePicker clicked")}
              >
                <View
                  style={{
                    backgroundColor: "#FFFFFF",
                    height: 256,
                    overflow: "hidden",
                  }}
                >
                  <View style={{ marginTop: 20 }}>
                    <DateTimePicker
                      minuteInterval={5}
                      display={Platform.OS === "ios" ? "spinner" : "default"}
                      value={new Date()}
                      mode="datetime"
                      onChange={onChange}
                    />
                  </View>
                  <TouchableHighlight
                    underlayColor={"transparent"}
                    onPress={onPressCancel}
                    style={[styles.btnText, styles.btnCancel]}
                  >
                    <Text>Cancel</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    underlayColor={"transparent"}
                    onPress={onPressDone}
                    style={[styles.btnText, styles.btnDone]}
                  >
                    <Text>Done</Text>
                  </TouchableHighlight>
                </View>
              </TouchableHighlight>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    </TouchableHighlight>
  );
};

DTPicker.defaultPropos = {
  textStyle: {},
  defaultDate: moment().format("LLLL"),
  onDateChange: () => {},
};
export default DTPicker;

const styles = StyleSheet.create({
  btnText: {
    position: "absolute",
    top: 0,
    height: 42,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnCancel: {
    left: 0,
  },
  btnDone: {
    right: 0,
  },
});