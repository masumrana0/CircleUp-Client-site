"use client";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import Weather from "../newsfeed/Wealther/Weather";
import { useAppSelector } from "@/Redux/hooks";

const LeftSideBar = () => {
  // const theme = useAppSelector((state) => state.themeSlice.theme);
  const theme = "light";
  return (
    <section>
      <div className="flex flex-col   gap-4 ">
        {/* Weather card */}
        <div>
          <Weather />
        </div>

        {/* Latest activity */}
        <div
          className={`${theme === "light" ? "bg-gray-200" : "bg-[#212835]"} p-4 rounded-md`}
        >
          <div>
            <div className="flex justify-between items-center ">
              <h1
                className={`${theme === "light" ? "text-black" : " text-gray-900"} font_montserrat`}
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
                    className={`${theme === "light" ? "text-black" : " color_dark_1"} text-sm font_montserrat `}
                  >
                    Css Ninja
                  </span>
                  <small
                    className={`${theme === "light" ? "text-black" : " text-gray-900"} font-light color_dark_2 user_sub_heading`}
                  >
                    3 hours ago
                  </small>
                </div>
              </div>
              <span className="cursor-pointer">
                <MdOutlineRemoveRedEye />
              </span>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSideBar;
