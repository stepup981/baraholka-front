import React from "react";

import style from "./style.module.scss";

interface IMainInputProps {
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value?: string;
  className?: string;
  disabled?: boolean;
}

const MainInput: React.FC<IMainInputProps> = ({
  className,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled,
}) => {
  return (
    <input
      className={`${style.input} ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default MainInput;
