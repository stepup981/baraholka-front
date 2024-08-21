import React from "react";
import style from "./style.module.scss";
import Link from "next/link";

import { IconButton } from "@/shared/ui/buttons/icon";
import { path } from "@/shared/routing";

import profile from "@/shared/assets/profile.svg";
import bag from "@/shared/assets/bag.svg";

const ProfileNavbar = () => {
  return (
    <div className={style.profileNavbar}>
      <Link href={path.profile}>
        <IconButton iconSrc={profile} altText="Profile" />
      </Link>
      <Link href={path.bag}>
        <IconButton iconSrc={bag} altText="Bag" />
      </Link>
    </div>
  );
};

export default ProfileNavbar;
