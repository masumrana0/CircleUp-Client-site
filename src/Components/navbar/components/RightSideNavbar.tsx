"use client";

import React, { useState } from "react";
import NavbarSearchBar from "./NavbarSearchBar";
import DarkmodeToggle from "./DarkmodeToggle";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Space } from "antd";
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

const RightSideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // redux
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.themeSlice.theme);

  const handleToggleTheme = () => {
    dispatch(toggleThemeMode(theme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex items-center gap-6">
      <div className="hidden md:block">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Space wrap size={16}>
            <Avatar size={45} icon={<UserOutlined />} />
          </Space>
        </button>
        <div className=" ">
          <div className="absolute w-[200px] right-16 z-10">
            {isOpen ? (
              <>
                <div className="bg-gray-200 rounded-md p-3 ">
                  <div className="flex flex-col">
                    {/* Theme  */}
                    <div>
                      <div className=" hover:bg-slate-100 p-2 rounded-md cursor-pointer flex justify-center items-center gap-2">
                        <p className="text-sm">Theme</p>
                        <DarkmodeToggle handleToggleTheme={handleToggleTheme} />
                      </div>
                      <Divider className="my-2" />
                    </div>
                    {/* Profile  */}
                    <div>
                      <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
                        <CgProfile className="" />
                        <Link href="/profile" className="text-sm">
                          Profile
                        </Link>
                      </div>
                      <Divider className="my-2" />
                    </div>
                    {/* Setting */}
                    <div>
                      <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
                        <IoSettings className="" />
                        <Link href="/setting" className="text-sm">
                          Setting
                        </Link>
                      </div>
                      <Divider className="my-2" />
                    </div>
                    {/* Help */}
                    <div>
                      <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
                        <IoMdHelpBuoy className="text-xl" />
                        <Link href="/help" className="text-sm">
                          Help
                        </Link>
                      </div>
                      <Divider className="my-2" />
                    </div>
                    {/* Logout */}
                    <div>
                      <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer  items-center gap-2">
                        <RiLogoutCircleLine className="text-xl" />
                        <p className="text-sm">Logout</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNavbar;
