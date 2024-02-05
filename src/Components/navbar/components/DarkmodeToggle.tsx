import React, { useEffect, useState } from "react";
import { BsMoonStars, BsBrightnessHigh } from "react-icons/bs";
import { FaDesktop, FaMoon } from "react-icons/fa6";
// import { toggleThemeMode } from "@/Redux/Slices/themeSlice";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { Select, Space } from "antd";

const shouldRenderOnServer = typeof window === "undefined";

const DarkmodeToggle = () => {
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

  // Event Handling
  const handleToggleClick = () => {
    // dispatch(toggleThemeMode());
  };

  const handleChange = (value: string) => {
    console.log(value);
  };

  const options = [
    {
      icon: <BsBrightnessHigh />,
      text: "light",
    },
    {
      icon: <FaMoon />,
      text: "dark",
    },
    {
      icon: <FaDesktop />,
      text: "system",
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

  const defaultValue = "system";

  return (
    <Space className="w-full">
      <Select
        defaultValue={defaultValue}
        style={{ width: "100%" }}
        onChange={handleChange}
        options={SelectOption}
      />
    </Space>
  );
};

export default DarkmodeToggle;
