import React from "react";
import style from "./style.module.scss";

import { IButtonProps } from "@/shared/lib/types/buttons";

export default function MainButton({ children, onClick }: IButtonProps) {
  return (
    <button className={style.main} onClick={onClick}>
      {children}
    </button>
  );
}
