import React from "react";
import style from "./style.module.scss";

import { RegistrationForm } from "@/features/registration";

import { Title } from "@/shared/ui/title";

const Registration = () => {
  return (
    <section className={style.registration}>
      <Title level={1}>Registration</Title>
      <RegistrationForm />
    </section>
  );
};

export default Registration;
