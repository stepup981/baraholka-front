import axios, { AxiosResponse } from "axios";
import { IResponseUser } from "@/entities/user/model/types";
import axiosConfigUser from "@/shared/api/user";

export const login = async (
  email: string,
  password: string,
): Promise<AxiosResponse<IResponseUser>> => {
  return await axiosConfigUser.post<IResponseUser>("login", {
    email,
    password,
  });
};

export const checkAuth = async (): Promise<AxiosResponse<IResponseUser>> => {
  return await axiosConfigUser.get<IResponseUser>("refresh");
};
