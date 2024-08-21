import React from "react";
import Image from "next/image";
import style from "./style.module.scss";

import { IButtonProps } from "@/shared/types/buttons";

interface IIconButtonProps extends IButtonProps {
  iconSrc: string;
  altText: string;
}

const IconButton: React.FC<IIconButtonProps> = ({
  iconSrc,
  altText,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={style.iconButton}>
      <Image src={iconSrc} alt={altText} width={24} height={24} />
    </button>
  );
};

export default IconButton;
