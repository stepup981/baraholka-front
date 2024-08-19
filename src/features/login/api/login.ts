import axiosConfigUser from "./axiosConfigUser";
import axios from "axios";
import { IUser, IResponseUser } from "./types";

const login = async (query: IUser): Promise<IResponseUser | undefined> => {
  try {
    const response = await axios.post("login", { params: query });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default login;
