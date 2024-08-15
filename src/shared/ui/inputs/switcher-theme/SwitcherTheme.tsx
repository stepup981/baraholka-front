"use client";
import React, { useEffect, useState } from "react";

import style from "./style.module.scss";

export default function SwitcherTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <label className={style.switch}>
        <input type="checkbox" onChange={toggleTheme} />
        <span className={`${style.slider} ${style.round}`}></span>
      </label>
    </div>
  );
}
