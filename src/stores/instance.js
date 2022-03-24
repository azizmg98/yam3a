import axios from "axios";

// don't forget to change the ip address
export const baseURL = "http://localhost:8000";
export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});

//192.168.100.194
