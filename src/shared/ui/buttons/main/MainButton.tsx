import React from "react";
import style from "./style.module.scss";

import { IButtonProps } from "@/shared/types/buttons";

export default function MainButton({
  children,
  onClick,
  disabled,
}: IButtonProps) {
  return (
    <button className={style.main} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
