"use client";

import React from "react";
import NavbarSearchBar from "./NavbarSearchBar";
import DarkmodeToggle from "./DarkmodeToggle";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { setOpenDrawer } from "@/Redux/Slices/navbarSlice";
import NavbarProfileDrawer from "./NavbarProfileDrawer";

const RightSideNavbar = () => {
  // redux
  const dispatch = useAppDispatch();
  // const isOpen = useAppSelector((state) => state.navbarSlice.drawerOpen);

  return (
    <div className="flex items-center gap-6">
      <div className="hidden md:block">
        <DarkmodeToggle />
      </div>
      <div className="hidden md:block">
        <button onClick={() => dispatch(setOpenDrawer(true))}>
          <Space wrap size={16}>
            <Avatar size={45} icon={<UserOutlined />} />
          </Space>
        </button>
        <div className=" ">
          <NavbarProfileDrawer width="250" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNavbar;
