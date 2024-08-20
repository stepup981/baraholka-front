import axiosConfigUser from "@/shared/api/user";
import { IUser, IResponseLogout } from "@/entities/user/model/types";

const logout = async (query: IUser): Promise<IResponseLogout | undefined> => {
  try {
    const response = await axiosConfigUser.post("logout", query);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default logout;
