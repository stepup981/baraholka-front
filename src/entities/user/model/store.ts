import { create } from "zustand";
import { IUser } from "./types";

interface UserStore {
  user: IUser;
  setInfoOnUser: (info: IUser) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: {
    email: "",
    isActivated: false,
    id: "",
  },
  setInfoOnUser: (info) => set({ user: info }),
}));

export default useUserStore;
