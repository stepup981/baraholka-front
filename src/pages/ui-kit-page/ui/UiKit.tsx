import React from "react";
import style from "./style.module.scss";

import { MainButton } from "@/shared/ui/buttons/main";
import { Input } from "@/shared/ui/inputs/main-input";
import { Title } from "@/shared/ui/title";

const UI = () => {
  return (
    <section>
      <Title level={1}>UI Kit</Title>
      <div className={style.ui}>
        <div className={style.ui__buttons}>
          <MainButton>example</MainButton>
          <MainButton disabled={true}>example</MainButton>
        </div>
        <Input type="text" placeholder="example" />
        <Input type="text" placeholder="example" disabled={true} />
      </div>
    </section>
  );
};

export default UI;
