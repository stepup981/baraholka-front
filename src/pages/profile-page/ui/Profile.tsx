"use client";
import React, { useState } from "react";
import style from "./style.module.scss";

import { LoginForm } from "@/features/login";
import { AccountLogout } from "@/features/logout";
import { Account } from "@/entities/user";

import { Title } from "@/shared/ui/title";

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <section className={style.profile}>
      <Title level={1}>Profile</Title>
      {!isLoggedIn && <LoginForm onLogin={() => setIsLoggedIn(true)} />}
      {isLoggedIn && (
        <>
          <Account />
          <AccountLogout />
        </>
      )}
    </section>
  );
}
