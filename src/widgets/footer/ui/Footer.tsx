import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./style.module.scss";

import { path } from "@/shared/routing";
import github from "@/shared/assets/github.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`${style.footer__wrapper} container`}>
        <Link href={path.ui}>UI Kit</Link>
        <div className={style.github}>
          <Image src={github} alt="Github" width={22} height={22} />
          <div className={style.github__links}>
            <a
              href="https://github.com/stepup981/baraholka-front"
              target="_blank"
            >
              front
            </a>
            <span>/</span>
            <a
              href="https://github.com/stepup981/baraholka-back"
              target="_blank"
            >
              back
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
