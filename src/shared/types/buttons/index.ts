import { ReactNode, MouseEventHandler } from "react";

export interface IButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}
