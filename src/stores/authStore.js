import { instance } from "./instance";
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import gatheringStore from "./gatheringStore";
import locationStore from "./locationStore";

class AuthStore {
  user = null;
  users = [];

  constructor() {
    makeAutoObservable(this);
  }

  signin = async (user, navigation) => {
    try {
      const res = await instance.post("/authenticate/signin", user);
      this.setUser(res.data.token);
      this.fetchUsers();
      // console.log(this.user);
      navigation.navigate("GatheringList");
    } catch (error) {
      if (error.message == "Request failed with status code 401") {
        alert("username or password is wrong");
      }
      console.log(error);
    }
  };

  signup = async (userData, navigation) => {
    try {
      const res = await instance.post("/authenticate/signup", userData);
      await this.setUser(res.data.token);
      navigation.navigate("GatheringList");
    } catch (error) {
      console.log(error);
    }
  };

  fetchUsers = async () => {
    try {
      const response = await instance.get("/authenticate");
      this.users = response.data;
    } catch (error) {
      console.log("AuthStore -> fetchUsers -> error", error);
    }
  };

  signout = async () => {
    try {
      this.user = null;
      this.users = [];
      await AsyncStorage.removeItem("myToken");
    } catch (error) {
      console.log(error);
    }
  };

  setUser = async (token) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      this.user = decode(token);
      gatheringStore.fetchHostGathering();
      locationStore.fetchUserLocations();
      console.log(this.user);
    } catch (error) {
      console.log(error);
    }
  };

  checkForToken = async () => {
    try {
      const token = await AsyncStorage.getItem("myToken");
      if (token) {
        const decodedToken = decode(token);
        console.log("user", this.user);
        if (Date.now() < +decodedToken.exp) {
          this.setUser(token);
        } else {
          this.signout();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
