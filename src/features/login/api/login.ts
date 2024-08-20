import axiosConfigUser from "@/shared/api/user";
import { IUser, IResponseUser } from "@/entities/user/model/types";

const login = async (query: IUser): Promise<IResponseUser | undefined> => {
  try {
    const response = await axiosConfigUser.post("login", query);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export default login;
