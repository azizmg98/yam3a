import axios from "axios";

//! don't forget to change the ip address
//! also check the port number
export const baseURL = "http://192.168.100.194:5000";

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});

//192.168.100.194
//http://172.20.10.12:5000
