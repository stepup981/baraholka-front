import React from "react";
import style from "./style.module.scss";

import { IconButton } from "@/shared/ui/buttons/icon";

import profile from "@/shared/assets/profile.svg";
import bag from "@/shared/assets/bag.svg";
import Link from "next/link";

export default function ProfileNavbar() {
  return (
    <div className={style.profileNavbar}>
      <Link href="/profile">
        <IconButton iconSrc={profile} altText="Profile" />
      </Link>
      <IconButton iconSrc={bag} altText="Bag" />
    </div>
  );
}
