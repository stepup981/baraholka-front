import axios from "axios";
import { AxiosResponse } from "axios";
import axiosConfigUser from "@/shared/api/user";
import { IClientUser, IResponseUser } from "@/entities/user/model/types";

export const registration = async ({
  email,
  password,
}: IClientUser): Promise<AxiosResponse<IResponseUser>> => {
  return await axiosConfigUser.post<IResponseUser>("registration", {
    email,
    password,
  });
};

export const login = async ({
  email,
  password,
}: IClientUser): Promise<AxiosResponse<IResponseUser>> => {
  return await axiosConfigUser.post<IResponseUser>("login", {
    email,
    password,
  });
};

export const logout = async (): Promise<void> => {
  return await axiosConfigUser.post("logout");
};
