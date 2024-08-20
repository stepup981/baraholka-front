"use client";
import React from "react";

import logout from "@/features/logout/api/logout";

import { MainButton } from "@/shared/ui/buttons/main";
export default function AccountLogout() {
  const logoutAccount = () => {
    console.log("Вышел");
    // logout()
  };

  return (
    <div>
      <MainButton onClick={logoutAccount}>Logout</MainButton>
    </div>
  );
}
