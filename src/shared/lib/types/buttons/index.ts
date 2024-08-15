import { ReactNode, MouseEventHandler } from "react";

export interface IButtonProps {
  children?: ReactNode | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
