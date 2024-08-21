import React, { MouseEventHandler } from "react";
import style from "./style.module.scss";

interface IMainFormProps {
  action: string;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const MainForm: React.FC<IMainFormProps> = ({ action, onSubmit, children }) => {
  return (
    <form className={style.mainForm} action={action} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default MainForm;
