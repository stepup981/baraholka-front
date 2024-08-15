"use client";
import React, { useEffect, useState } from "react";

import style from "./style.module.scss";

export default function SwitcherTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme');
  //   document.body.setAttribute("data-theme", savedTheme);

  // }, [])

  // const toggleTheme = () => {
  //   const newTheme = isDarkMode ? "dark" : "light";
  //   document.body.setAttribute("data-theme", newTheme);
  //   localStorage.setItem('theme', newTheme)
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    <div>
      <label id="switch" className={style.switch}>
        <input type="checkbox" id="slider" />
        <span className={`${style.slider} ${style.round}`}></span>
      </label>
    </div>
  );
}
