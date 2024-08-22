import axios from "axios";
import { config } from "process";

const axiosConfigUser = axios.create({
  baseURL: "http://localhost:5000/api/",
  withCredentials: true,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

axiosConfigUser.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default axiosConfigUser;
