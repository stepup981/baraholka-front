import React from "react";
import style from "./style.module.scss";

import { LoginForm } from "@/features/login";
import { Title } from "@/shared/ui/title";

export default function Profile() {
  return (
    <section className={style.profile}>
      <Title level={1}>Profile</Title>
      <LoginForm />
    </section>
  );
}
