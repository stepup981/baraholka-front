"use client";
import React from "react";

import logout from "@/features/logout/api/logout";

import { MainButton } from "@/shared/ui/buttons/main";
export default function AccountLogout({ onLogOut }: { onLogOut: () => void }) {
  const logoutAccount = () => {
    logout();
    localStorage.removeItem("token");
    onLogOut();
  };

  return (
    <div>
      <MainButton onClick={logoutAccount}>Logout</MainButton>
    </div>
  );
}
