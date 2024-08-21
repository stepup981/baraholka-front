import React from "react";
import style from "./style.module.scss";

import { IButtonProps } from "@/shared/types/buttons";

const MainButton: React.FC<IButtonProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <button className={style.mainButton} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default MainButton;
