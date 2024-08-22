import { create } from "zustand";
import { IUser } from "./types";

interface UserStore {
  user: IUser | {};
  isLoggedIn: boolean;
  isLoading: boolean;
  setUser: (userInfo: IUser | {}) => void;
  setIsLoggedIn: (flag: boolean) => void;
  setIsLoading: (flag: boolean) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: {} as IUser,
  isLoggedIn: false,
  isLoading: false,

  setUser: (userInfo) => {
    set({ user: userInfo });
  },
  setIsLoggedIn: (flag) => {
    set({ isLoggedIn: flag });
  },
  setIsLoading: (flag) => {
    set({ isLoading: flag });
  },
}));

export default useUserStore;
