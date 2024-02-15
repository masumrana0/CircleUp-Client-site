"use client";

import React, { useState } from "react";
import NavbarSearchBar from "./NavbarSearchBar";
import DarkmodeToggle from "./DarkmodeToggle";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Dropdown, Space } from "antd";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { setOpenDrawer } from "@/Redux/Slices/navbarSlice";
import NavbarProfileDrawer from "./NavbarProfileDrawer";
import { FaRegBookmark } from "react-icons/fa6";
import { IoMdHelpBuoy, IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineHideSource } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { toggleThemeMode } from "@/Redux/Slices/themeSlice";
import { Turret_Road } from "next/font/google";
import ProfileDrwopDownItem from "@/Components/home/Dropdowns/Items/ProfileItem";

const RightSideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // redux
  const dispatch = useAppDispatch();
  // const theme = useAppSelector((state) => state.themeSlice.theme);
  const theme = "light";

  const handleToggleTheme = () => {
    dispatch(toggleThemeMode(theme === "light" ? "dark" : "light"));
  };

  const handleDropdownProfileCard = () => {};

  return (
    <div className="flex items-center gap-6">
      <div className="hidden md:block">
        <Dropdown menu={{ items: ProfileDrwopDownItem }}>
          <button
          // onMouseEnter={() => setIsOpen(true)}
          // onMouseOver={() => setIsOpen(false)}
          >
            <Space wrap size={16}>
              <Avatar size={45} icon={<UserOutlined />} />
            </Space>
          </button>
        </Dropdown>
      </div>
    </div>
  );
};

export default RightSideNavbar;
