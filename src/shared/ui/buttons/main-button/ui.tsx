import React from "react";
import style from "./style.module.scss";

import { ButtonProps } from "@/shared/lib/types/buttons";

export default function MainButton({ children, onClick }: ButtonProps) {
  return (
    <button className={style.main} onClick={onClick}>
      {children}
    </button>
  );
}
