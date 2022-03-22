import { instance } from "./instance";
import { makeAutoObservable } from "mobx";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;
  users = [];

  constructor() {
    makeAutoObservable(this);
  }

  signin = async (user, navigation) => {
    try {
      // user = { username: "Ali Ahmad", password: "123KDD"}
      const res = await instance.post("/authenticate/signin", user); //http://localhost:5000/api/authenticate/signin
      this.setUser(res.data.token);
      //console.log(res.data.token);
      // console.log("authstore user");
      // console.log(this.user);
      // console.log("authstore token");
      // console.log(res.data.token);
      this.fetchUsers();
      navigation.navigate("Home");
    } catch (error) {
      if (error.message == "Request failed with status code 401") {
        alert("username or password is wrong");
      }
      console.log(error);
    }
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/authenticate/signup", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  fetchUsers = async () => {
    try {
      console.log("fetchusers");
      console.log(this.users);
      const response = await instance.get("/authenticate");
      this.users = response.data;
      console.log("fetchusers");
      console.log(this.users);
    } catch (error) {
      console.log("AuthStore -> fetchUsers -> error", error);
    }
  };

  signout = async () => {
    this.user = null;
    this.users = [];
    console.log(this.user);
    await AsyncStorage.removeItem("myToken");
  };

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
    console.log("set user");
    console.log(this.user);
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
}

// checkForToken = async () => {
//     this.getData();
//     const token = this.user;
//     if (token) {
//       const decodedToken = decode(token);
//       console.log(decodedToken);
//       if (Date.now() < +decodedToken.exp) {
//         this.setUser(token);
//       } else this.unSetUser();
//     }
//   };
// }

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
