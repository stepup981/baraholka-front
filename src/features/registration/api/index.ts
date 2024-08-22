import axiosConfigUser from "@/shared/api/user";
import { IResponseUser } from "@/entities/user/model/types";
import { AxiosResponse } from "axios";

const registration = async (
  email: string,
  password: string,
): Promise<AxiosResponse<IResponseUser>> => {
  return await axiosConfigUser.post<IResponseUser>("registration", {
    email,
    password,
  });
};

export default registration;
