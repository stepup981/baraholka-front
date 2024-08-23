import axios from "axios";

const axiosConfigUser = axios.create({
  baseURL: "http://localhost:5000/api/",
  withCredentials: true,
});

axiosConfigUser.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default axiosConfigUser;
