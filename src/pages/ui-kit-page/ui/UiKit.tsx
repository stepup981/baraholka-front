import React from "react";
import style from "./style.module.scss";

import { MainButton } from "@/shared/ui/buttons/main";
import { Input } from "@/shared/ui/inputs/main-input";
import { Title } from "@/shared/ui/title";

export default function UI() {
  return (
    <div className={style.ui}>
      <Title level={1}>UI Kit</Title>
      <div className={style.ui__buttons}>
        <MainButton>example</MainButton>
      </div>
      <Input placeholder="example" />
    </div>
  );
}
