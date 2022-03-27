import { instance } from "./instance";
import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authStore from "./authStore";
import { useNavigation } from "@react-navigation/native";
import LocationList from "../components/location/LocationList";

class LocationStore {
  location = null;
  locations = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchLocations = async () => {
    try {
      const response = await instance.get("/locations");
      this.locations = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  addLocation = async (address, pin) => {
    const newLocation = [address, pin];
    console.log(newLocation);
    const navigation = useNavigation();
    try {
      const response = await instance.post("/locations", newLocation);
      this.locations.push(response.data);
      console.log(this.locations);
      navigation.navigate("LocationList");
    } catch (error) {
      console.log(
        "🚀 ~ file: locationStore.js ~ line 18 ~ locationStore ~ addLocation = ~ error",
        error
      );
    }
  };
}

const locationStore = new LocationStore();
// locationStore.fetchLocations();

export default locationStore;
