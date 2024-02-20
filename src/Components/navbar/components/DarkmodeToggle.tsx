"use client";
import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsSun, BsPcDisplayHorizontal } from "react-icons/bs";
import { FaDesktop, FaMoon } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { Select, Space } from "antd";

// const shouldRenderOnServer = typeof window === "undefined";

const DarkmodeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");
  const element = document.documentElement;
  // useEffect(() => {
  //   if (shouldRenderOnServer) {
  //     return;
  //   }
  //   // setLocalThemeState(themeState);
  // }, []);

  const options = [
    {
      icon: BsSun,
      text: "light",
    },
    {
      icon: BsFillMoonFill,
      text: "dark",
    },
    {
      icon: FaDesktop,
      text: "system",
    },
  ];

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  const SelectOption = options.map((option) => ({
    value: option.text,
    label: (
      <button className="w-full flex justify-between   items-center gap-1  ">
        {option.text}
        <option.icon className="text-md" />
      </button>
    ),
  }));

  const defaultValue = "system";

  return (
    <Space className="w-full  flex justify-end">
      <Select
        defaultValue={defaultValue}
        style={{ width: "100% !important" }}
        onChange={(value) => setTheme(value)}
        options={SelectOption}
      />
    </Space>
  );
};

export default DarkmodeToggle;
