import axios from "axios";

// don't forget to change the ip address
export const baseURL = "http://192.168.100.194:5000";
export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});