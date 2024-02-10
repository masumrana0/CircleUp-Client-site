"use client";
import { Avatar, Button, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { FaBookmark, FaLocationDot, FaRegBookmark } from "react-icons/fa6";
import { MdOutlineHideSource, MdOutlineRemoveRedEye } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import Weather from "../newsfeed/Wealther/Weather";
import { useAppSelector } from "@/Redux/hooks";
import { IoMdNotificationsOutline } from "react-icons/io";

const LeftSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useAppSelector((state) => state.themeSlice.theme);
  return (
    <section>
      <div className="flex flex-col   gap-4 ">
        {/* Weather card */}
        <div>
          <Weather />
        </div>

        {/* Latest activity */}
        <div
          className={`${theme === "light" ? "bg-[#212835]" : "bg-white"} p-4 rounded-md`}
        >
          <div>
            <div className="flex justify-between items-center ">
              <h1
                className={`${theme === "light" ? "text-white" : " text-gray-900"} font_montserrat`}
              >
                Latest Activity
              </h1>
            </div>
            <hr className="mt-2" />
            {/* section 1 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span
                    className={`${theme === "light" ? "text-white" : " color_dark_1"} text-sm font_montserrat `}
                  >
                    Css Ninja
                  </span>
                  <small
                    className={`${theme === "light" ? "text-white" : " text-gray-900"} font-light color_dark_2 user_sub_heading`}
                  >
                    3 hours ago
                  </small>
                </div>
              </div>
              <span className="cursor-pointer">
                <MdOutlineRemoveRedEye />
              </span>
            </div>
            <hr className="" />
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span
                    className={`${theme === "light" ? "text-white" : " color_dark_1"} text-sm font_montserrat `}
                  >
                    Css Ninja
                  </span>
                  <small
                    className={`${theme === "light" ? "text-white" : " text-gray-900"} font-light color_dark_2 user_sub_heading`}
                  >
                    3 hours ago
                  </small>
                </div>
              </div>
              <span className="cursor-pointer">
                <MdOutlineRemoveRedEye />
              </span>
            </div>
            <hr className="" />
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span
                    className={`${theme === "light" ? "text-white" : " color_dark_1"} text-sm font_montserrat `}
                  >
                    Css Ninja
                  </span>
                  <small
                    className={`${theme === "light" ? "text-white" : " text-gray-900"} font-light color_dark_2 user_sub_heading`}
                  >
                    3 hours ago
                  </small>
                </div>
              </div>
              <span className="cursor-pointer">
                <MdOutlineRemoveRedEye />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSideBar;

// meeting tomorrow 6:15 pm
