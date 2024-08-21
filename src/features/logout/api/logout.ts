import axiosConfigUser from "@/shared/api/user";
import { IUser, IResponseLogout } from "@/entities/user/model/types";

const logout = async () => {
  try {
    await axiosConfigUser.post("logout");
  } catch (error) {
    throw error;
  }
};

export default logout;
