"use client";
import React from "react";

import useUserStore from "@/entities/user/model/store";

import { MainButton } from "@/shared/ui/buttons/main";

const UserLogout = () => {
  const { logoutUser } = useUserStore();
  return (
    <div>
      <MainButton onClick={() => logoutUser()}>Logout</MainButton>
    </div>
  );
};

export default UserLogout;
