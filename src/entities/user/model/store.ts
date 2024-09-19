import { create } from "zustand";
import { IUser } from "./types";

interface UserStore {
  user: IUser | {};
  isLoggedIn: boolean;
  setUser: (userInfo: IUser | {}) => void;
  setIsLoggedIn: (flag: boolean) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: {} as IUser,
  isLoggedIn: false,
  setUser: (userInfo) => {
    set({ user: userInfo });
  },
  setIsLoggedIn: (flag) => {
    set({ isLoggedIn: flag });
  },
}));

export default useUserStore;
