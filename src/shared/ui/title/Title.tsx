import React, { ReactNode } from "react";
import style from "./style.module.scss";

interface ITitle {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode | string;
  className?: string;
}

export default function Title({ level, children, className = "" }: ITitle) {
  const Tag: keyof JSX.IntrinsicElements =
    `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${style[`title-${level}`]} ${className}`}>{children}</Tag>
  );
}
