import React from "react";

import style from "./style.module.scss";

interface IMainInputProps {
  className?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function MainInput({
  className,
  type = "text",
  value,
  onChange,
  placeholder,
}: IMainInputProps) {
  return (
    <input
      className={`${style.input} ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
