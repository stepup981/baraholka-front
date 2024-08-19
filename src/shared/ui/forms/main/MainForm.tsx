import React, { MouseEventHandler } from "react";
import style from "./style.module.scss";

interface IMainFormProps {
  action: string;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function MainForm({
  action,
  onSubmit,
  children,
}: IMainFormProps) {
  return (
    <form className={style.main} action={action} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
