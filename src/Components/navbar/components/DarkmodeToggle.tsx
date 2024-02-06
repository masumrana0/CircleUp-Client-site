import React, { useEffect, useState } from "react";
import { BsMoonStars, BsBrightnessHigh } from "react-icons/bs";
import { FaDesktop, FaMoon } from "react-icons/fa6";
// import { toggleThemeMode } from "@/Redux/Slices/themeSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { Select, Space } from "antd";

const shouldRenderOnServer = typeof window === "undefined";

const DarkmodeToggle = ({ handleToggleTheme }: any) => {
  // Local State
  const [localThemeState, setLocalThemeState] = useState(false);
  // Redux
  const dispatch = useAppDispatch();
  // const themeState = useAppSelector((state) => state.themeSlice.theme);

  useEffect(() => {
    if (shouldRenderOnServer) {
      return;
    }
    // setLocalThemeState(themeState);
  }, []);

  const options = [
    {
      icon: <BsBrightnessHigh />,
      text: "light",
    },
    {
      icon: <FaMoon />,
      text: "dark",
    },
  ];

  const SelectOption = options.map((option) => ({
    value: option.text,
    label: (
      <span className="w-full flex justify-center items-center gap-1">
        {option.icon}
        {option.text}
      </span>
    ),
  }));

  const defaultValue = "dark";

  return (
    <Space className="w-full  flex justify-end">
      <Select
        defaultValue={defaultValue}
        style={{ width: "100% !important" }}
        onChange={(value) => handleToggleTheme(value)}
        options={SelectOption}
      />
    </Space>
  );
};

export default DarkmodeToggle;
