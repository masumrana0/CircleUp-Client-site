"use client";
import React, { useState } from "react";
import {
  AiFillMessage,
  AiOutlineBell,
  AiOutlineHome,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BsChatRight } from "react-icons/bs";
import { Dropdown } from "antd";
import { friendRequestItems } from "./Navbar-Item&Label/NavbarItems/FriendsRequestItem";
import { notificationItems } from "./Navbar-Item&Label/NavbarItems/NotificationItem";
import { RiHome5Fill } from "react-icons/ri";
import { IoPersonAddSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import Link from "next/link";

const LeftSideNavBar = () => {
  const [navbarState, setNavbarState] = useState(1);
  return (
    <div className="flex  ml-0  items-center gap-4 justify-between md:ml-20">
      <div className="w-full flex  items-center gap-4 md:gap-40 justify-between px-4 lg;px-0 ">
        <Link href="/home">
          <RiHome5Fill
            onClick={() => setNavbarState(1)}
            className={`md:text-4xl text-3xl cursor-pointer font-bold p-1  transition-colors duration-300  rounded ${navbarState == 1 ? "text-white  bg-violet-700 " : "text-violet-700"}`}
          />
        </Link>

        <AiFillMessage
          onClick={() => setNavbarState(2)}
          className={`md:text-4xl text-3xl cursor-pointer font-bold p-1  transition-colors duration-300  rounded ${navbarState == 2 ? "text-white  bg-violet-700" : "text-violet-700"}`}
        />
        <Dropdown
          menu={{ items: friendRequestItems }}
          className="cursor-pointer"
          placement="bottomLeft"
          arrow
        >
          <IoPersonAddSharp
            onClick={() => setNavbarState(4)}
            className={`md:text-4xl text-3xl  font-bold p-1  transition-colors duration-300  rounded ${navbarState == 4 ? "text-white  bg-violet-700" : "text-violet-700"}`}
          />
        </Dropdown>

        <Dropdown
          className="cursor-pointer"
          menu={{ items: notificationItems }}
          placement="bottomLeft"
          arrow
        >
          <IoMdNotifications
            onClick={() => setNavbarState(3)}
            className={`md:text-4xl text-3xl font-bold p-1  transition-colors duration-300  rounded ${navbarState == 3 ? "text-white  bg-violet-700" : "text-violet-700"}`}
          />
        </Dropdown>
      </div>
    </div>
  );
};

export default LeftSideNavBar;
