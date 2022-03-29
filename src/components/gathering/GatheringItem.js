import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import YAListItem from "../shared/YAListItem";
import { Pressable } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { baseURL } from "../../stores/instance";
// variable deleration
const DEFAULT_IMAGE =
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F09%2Fgettyimages-143479959-2000.jpg&w=1100&h=737&c=sc&poi=face&q=60";

const GatheringItem = ({ gathering }) => {
  const navigation = useNavigation();

  const [image, setImage] = useState("");

  useEffect(() => {
    const newImage = gathering.image
      ? baseURL + gathering.image
      : DEFAULT_IMAGE;
    setImage(newImage);
  }, [gathering.image]);

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("GatheringDetail", { gathering: gathering });
      }}
    >
      <YAListItem
        uri={image}
        title={gathering.title}
        date={gathering.date}
        time={gathering.time}
        location={gathering.location}
        guests={gathering.guests}
      />
    </Pressable>
  );
};

export default GatheringItem;

const styles = StyleSheet.create({});
