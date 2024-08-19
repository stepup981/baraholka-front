import React from "react";
import style from "./style.module.scss";

import { RegistrationForm } from "@/features/auth";

import { Title } from "@/shared/ui/title";

export default function Registration() {
  return (
    <section className={style.registration}>
      <Title level={1}>Registration</Title>
      <RegistrationForm />
    </section>
  );
}
