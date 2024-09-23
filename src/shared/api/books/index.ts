import axios from "axios";

const axiosConfigBooks = axios.create({
  baseURL: "https://openlibrary.org/",
});

export default axiosConfigBooks;
