import { instance } from "./instance";
import { makeAutoObservable } from "mobx";
import authStore from "./authStore";

class LocationStore {
  locations = [];
  userLocations = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchLocations = async () => {
    try {
      const response = await instance.get("/locations");
      this.locations = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  addLocation = async (address) => {
    const user = authStore.user;
    try {
      const response = await instance.post(
        `/locations/${user._id}/location`,
        address
      );
      this.locations.push(response.data);
      navigation.navigate("LocationList");
    } catch (error) {
      console.error(
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
      }
    } catch (error) {
      console.error(error);
    }
  };
}

const locationStore = new LocationStore();
locationStore.fetchUserLocations();
export default locationStore;
