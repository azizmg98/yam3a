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

  addGuest = async (ghatheringID, newGuest) => {
    try {
      const response = await instance.post(
        `/gatherings/${ghatheringID}/guest`,
        newGuest
      );

      console.log(response.data);
      this.guests.push(response.data);
      await this.fetchGuest();
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 18 ~ authStore ~ addGuest = ~ error",
        error
      );
    }
  };

  fetchGuest = async () => {
    try {
      console.log("hi");
      const response = await instance.get("/guests");
      this.guests = response.data;
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  uploadProfileImage = async (user) => {
    console.log("UPLOAD PROFILE IMAGE");
    console.log(user.image);
    try {
      const formData = new FormData();
      for (const key in user) {
        formData.append(key, user[key]);
      }
      const res = await instance.put(`/authenticate/${user._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        transformRequest: (data, headers) => {
          return formData; // this is doing the trick
        },
      });
      this.user.image = res.data.image;
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
