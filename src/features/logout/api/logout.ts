import axiosConfigUser from "./axiosConfigUser";
import axios from "axios";
import { IUser, IResponseLogout } from "./types";

const logout = async (query: IUser): Promise<IResponseLogout | undefined> => {
  try {
    const response = await axiosConfigUser.post("logout", { params: query });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default logout;
