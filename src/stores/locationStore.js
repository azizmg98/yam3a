import { instance } from "./instance";
import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authStore from "./authStore";
import { useNavigation } from "@react-navigation/native";
import LocationList from "../components/location/LocationList";

class LocationStore {
  location = null;
  locations = [];
  userLocations = [];
  gatheringLocation = null;

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

  fetchUserLocations = async () => {
    try {
      if (authStore.user) {
        const res = await instance.get(`/locations/${authStore.user._id}`);
        this.userLocations = res.data;
        console.log(this.userLocations);
        // console.log("THIS.HOSTEDGATHERINGS");
        // console.log(this.hostedGatherings);
      }
    } catch (error) {
      console.error(error);
    }
  };
}

const locationStore = new LocationStore();
locationStore.fetchUserLocations();
export default locationStore;
