import { create } from "zustand";
import { registration, login, logout } from "@/entities/user/api";
import { IUser, IResponseUser } from "./types";

interface UserStore {
  user: object;
  isAuth: boolean;
  isLoading: boolean;
  registrationUser: (email: string, password: string) => Promise<IResponseUser>;
  loginUser: (email: string, password: string) => Promise<IResponseUser>;
  logoutUser: () => Promise<void>;
}

const useUserStore = create<UserStore>((set) => ({
  user: {} as IUser,
  isAuth: false,
  isLoading: false,

  registrationUser: async (email, password) => {
    set({ isLoading: true });
    try {
      const response = await registration({ email, password });
      return response.data;
    } catch (error: any) {
      console.log(error);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
  loginUser: async (email, password) => {
    try {
      const response = await login({ email, password });
      set({ user: response.data.user });
      set({ isAuth: true });
      localStorage.setItem("token", response.data.accessToken);
      return response.data;
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  },
  logoutUser: async () => {
    try {
      await logout();
      set({ user: {} });
      set({ isAuth: false });
      localStorage.removeItem("token");
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useUserStore;
