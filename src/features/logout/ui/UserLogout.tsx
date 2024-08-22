"use client";
import React from "react";

import logout from "@/features/logout/api";
import useUserStore from "@/entities/user/model/store";
import { MainButton } from "@/shared/ui/buttons/main";

const UserLogout = () => {
  const { setUser, setIsLoggedIn } = useUserStore();

  const submitLogout = () => {
    logout();
    setUser({});
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };
  return (
    <div>
      <MainButton onClick={submitLogout}>Logout</MainButton>
    </div>
  );
};

export default UserLogout;
