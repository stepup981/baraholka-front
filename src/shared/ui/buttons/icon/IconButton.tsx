import React from "react";
import Image from "next/image";
import style from "./style.module.scss";

import { IButtonProps } from "@/shared/types/buttons";

interface IIconButtonProps extends IButtonProps {
  iconSrc: string;
  altText: string;
}

export default function IconButton({
  iconSrc,
  altText,
  onClick,
}: IIconButtonProps) {
  return (
    <button onClick={onClick} className={style.iconButton}>
      <Image src={iconSrc} alt={altText} width={24} height={24} />
    </button>
  );
}
