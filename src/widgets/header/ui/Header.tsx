import React from "react";
import Link from "next/link";

import style from "./style.module.scss";

import { ProfileNavbar } from "@/entities/profile-navbar";

import { Logo } from "@/shared/ui/logo";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={`${style.header__wrapper} container`}>
        <Link href="/">
          <Logo />
        </Link>
        <ProfileNavbar />
      </div>
    </header>
  );
}
