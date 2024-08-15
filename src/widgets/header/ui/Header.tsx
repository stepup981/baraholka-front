import React from "react";

import style from "./style.module.scss";

import { Logo } from "@/shared/ui/logo";
import { SwitcherTheme } from "@/shared/ui/inputs/switcher-theme";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={`${style.header__wrapper} container`}>
        <Logo />
        <SwitcherTheme />
      </div>
    </header>
  );
}
