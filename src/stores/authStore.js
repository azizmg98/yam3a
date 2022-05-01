import { instance } from "./instance";
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import gatheringStore from "./gatheringStore";
import { useEffect } from "react";
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
      navigation.navigate("GatheringList");
    } catch (error) {
      if (error.message == "Request failed with status code 401") {
        alert("username or password is wrong");
      }
      console.error(error);
    }
  };

  signup = async (userData, navigation) => {
    try {
      const res = await instance.post("/authenticate/signup", userData);
      await this.setUser(res.data.token);
      navigation.navigate("GatheringList");
    } catch (error) {
      console.error(error);
    }
  };

  fetchUsers = async () => {
    try {
      const response = await instance.get("/authenticate");
      this.users = response.data;
    } catch (error) {
      console.error("AuthStore -> fetchUsers -> error", error);
    }
  };

  signout = async () => {
    try {
      this.user = null;
      this.users = [];
      await AsyncStorage.removeItem("myToken");
    } catch (error) {
      console.error(error);
    }
  };

  setUser = async (token) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      this.user = decode(token);
      gatheringStore.fetchHostGathering();
    } catch (error) {
      console.error(error);
    }
  };

  checkForToken = async () => {
    try {
      const token = await AsyncStorage.getItem("myToken");
      if (token) {
        const decodedToken = decode(token);
        if (Date.now() < +decodedToken.exp) {
          this.setUser(token);
        } else {
          this.signout();
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchGuest = async () => {
    try {
      const response = await instance.get("/guests");
      this.guests = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  uploadProfileImage = async (user) => {
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
      console.error(error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
