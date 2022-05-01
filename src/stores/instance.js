import axios from "axios";

export const baseURL = "http://192.168.56.1:5000";

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});