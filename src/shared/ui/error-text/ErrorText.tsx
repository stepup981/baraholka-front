import React from "react";
import style from "./style.module.scss";

interface IErrorTextProps {
  children: React.ReactNode;
}

const ErrorText: React.FC<IErrorTextProps> = ({ children }) => {
  return <div className={style.error}>{children}</div>;
};

export default ErrorText;
