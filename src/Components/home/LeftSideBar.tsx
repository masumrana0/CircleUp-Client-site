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
        {/* <div>
          <Weather />
        </div> */}

        {/* Recommended Card */}
        {/* <div className="bg-white p-4 rounded-md">
          <div>
            <div className="flex justify-between items-center">
              <h1 className="font_montserrat">Recommended Pages</h1>
              <Button
                shape="circle"
                className="flex justify-center items-center rounded-full bg-[#f4f4f4]"
              >
                <span>
                  <BsThreeDotsVertical className="font-bold" />
                </span>
              </Button>
            </div>
            <hr className="mt-2" />
          
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="font_montserrat color_dark_1  text-sm">
                    Pizza
                  </span>
                  <small className="user_sub_heading color_dark_2 font-light">
                    Pizza & Fast Food
                  </small>
                </div>
              </div>
              <span className="cursor-pointer">
                <FaRegBookmark />
              </span>
            </div>
            <hr className="" />
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="font_montserrat color_dark_1  text-sm">
                    Pizza
                  </span>
                  <small className="user_sub_heading color_dark_2 font-light">
                    Pizza & Fast Food
                  </small>
                </div>
              </div>
              <span className="cursor-pointer">
                <FaRegBookmark />
              </span>
            </div>
            <hr className="" />
            
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="font_montserrat color_dark_1  text-sm">
                    Pizza
                  </span>
                  <small className="user_sub_heading color_dark_2 font-light">
                    Pizza & Fast Food
                  </small>
                </div>
              </div>
              <span className="cursor-pointer">
                <FaRegBookmark />
              </span>
            </div>
          </div>
        </div> */}

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
              <div className="relative">
                <Button
                  onClick={() => setIsOpen(!isOpen)}
                  shape="circle"
                  className="flex justify-center items-center rounded-full bg-[#f4f4f4]"
                >
                  <span>
                    <BsThreeDotsVertical className="font-bold" />
                  </span>
                </Button>

                {/* TODO: make reusable popup card    */}
                <div className="absolute w-[200px] right-6">
                  {isOpen ? (
                    <>
                      <div className="bg-gray-200 rounded-md p-3 z-10 ">
                        <div className="flex flex-col">
                          {/* Save Post */}
                          <div>
                            <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
                              <FaRegBookmark className="" />
                              <p className="text-sm">Save Post</p>
                            </div>
                            <Divider className="my-2" />
                          </div>
                          {/* Notification Post */}
                          <div>
                            <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
                              <IoMdNotificationsOutline className="text-xl" />
                              <p className="text-sm">Turn Off Notification</p>
                            </div>
                            <Divider className="my-2" />
                          </div>
                          {/* Save Post */}
                          <div>
                            <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer  items-center gap-2">
                              <MdOutlineHideSource className="text-xl" />
                              <p className="text-sm">Hide Post</p>
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
