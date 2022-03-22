import { instance } from "./instance";
import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authStore from "./authStore";

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
      console.log("fetch Locations");
      console.log(this.locations);
    } catch (error) {
      console.log(error);
    }
  };

  addLocation = async (newLocation) => {
    try {
      console.log("new Location");
      console.log(newLocation);

      const response = await instance.post("/locations", newLocation);
      console.log(response.data);
      this.locations.push(response.data);
      console.log("new Location");
      console.log(this.locations);
    } catch (error) {
      console.log(
        "🚀 ~ file: locationStore.js ~ line 18 ~ locationStore ~ addLocation = ~ error",
        error
      );
    }
  };
}

const locationStore = new LocationStore();
locationStore.fetchLocations();

export default locationStore;