import { instance } from "./instance";
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;
  users = [];
  usersToInvite = [];
  guests = [];
  constructor() {
    makeAutoObservable(this);
  }

  signin = async (user, navigation) => {
    try {
      const res = await instance.post("/authenticate/signin", user);
      this.setUser(res.data.token);
      this.fetchUsers();
      navigation.navigate("GuestList");
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
      this.setUser(res.data.token);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };
  fetchUsers = async () => {
    try {
      const response = await instance.get("/authenticate");
      this.users = response.data;

      this.usersToInvite = response.data;
      // console.log("fetchusers");
      // console.log(this.users);

    } catch (error) {
      console.log("AuthStore -> fetchUsers -> error", error);
    }
  };

  signout = async () => {
    this.user = null;
    this.users = [];
    await AsyncStorage.removeItem("myToken");
  };

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const decodedToken = decode(token);
      if (Date.now() < +decodedToken.exp) {
        this.setUser(token);
      } else {
        this.signout();
      }
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
}


const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
