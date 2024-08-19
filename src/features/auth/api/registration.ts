import axiosConfigUser from "@/shared/api/user";
import { IUser, IResponseUser } from "@/entities/user/model/types";

const registration = async (
  query: IUser,
): Promise<IResponseUser | undefined> => {
  try {
    const response = await axiosConfigUser.post("registration", query, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default registration;
