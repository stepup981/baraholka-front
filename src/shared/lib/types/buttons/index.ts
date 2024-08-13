import { ReactNode, MouseEventHandler } from "react";

export interface ButtonProps {
  children: ReactNode | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
