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

// export const login = async (query: IClientUser): Promise<IResponseUser> => {
//   try {
//     await axiosConfigUser.post('login', query)
//   } catch (error: any) {
//     console.log(error)
//     throw error;
//   }
// }

// export const logout = async (): Promise>void> => {
//   try {
//     await axiosConfigUser.post('logout')
//   } catch (error) {
//     console.log(error)
//   }
// }

// const checkAuth = async () => {
//   try {
//     const response = await axios.get('http://localhost:5000/api/refresh', {withCredentials: true})
//     localStorage.setItem('token', response.data.accessToken)
//   } catch (error) {
//     console.log(error)
//     throw error
//   }
// }
