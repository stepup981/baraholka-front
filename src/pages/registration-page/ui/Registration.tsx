"use client";
import React from "react";
import style from "./style.module.scss";

import { AuthForm } from "@/widgets/auth-form";

import { Title } from "@/shared/ui/title";

const Registration = () => {
  return (
    <section className={style.registration}>
      <Title level={1}>Registration</Title>
      <AuthForm isLoginMode={false} />
    </section>
  );
};

export default Registration;
