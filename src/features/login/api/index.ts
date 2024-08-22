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
  // try {
  //   const response = await axios.get('http://localhost:5000/api/refresh', {withCredentials: true})
  //   console.log(response.data.accessToken)
  //   localStorage.setItem('token', response.data.accessToken)
  //   return response.data;
  // } catch (error) {
  //   console.log(error)
  // }
  return await axiosConfigUser.get<IResponseUser>("refresh");
};
