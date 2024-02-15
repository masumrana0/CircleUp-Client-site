"use client";
import { Avatar, Button, Divider, Dropdown, Modal, Upload } from "antd";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { UserOutlined } from "@ant-design/icons";
import { MdOutlineHideSource, MdOutlinePeopleAlt } from "react-icons/md";
import { FaGift, FaPlus, FaRegBookmark } from "react-icons/fa6";
import { useAppSelector } from "@/Redux/hooks";
import { IoMdNotificationsOutline } from "react-icons/io";
import StoriesCardDrwopDownItem from "./Dropdowns/Items/StoriesItems";
import SuggestedFriendsItems from "./Dropdowns/Items/SuggestedFriendsItems";
import Story from "../story/Story";

const RightSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  // const theme = useAppSelector((state) => state.themeSlice.theme);
  const theme = "light";
  return (
    <section>
      <div className="flex flex-col gap-4  ">
        <Story />
        {/* Suggested friend */}
        <div
          className={`${theme === "light" ? "bg-[#212835]" : "bg-white"} p-4 rounded-md`}
        >
          <div>
            <div className="flex justify-between items-center ">
              <h1
                className={`${theme === "light" ? "text-white" : " color_dark_1"}  font_montserrat `}
              >
                Suggested Friends
              </h1>

              <div>
                <Dropdown menu={{ items: SuggestedFriendsItems }}>
                  <Button
                    shape="circle"
                    className="flex justify-center items-center rounded-full bg-[#f4f4f4]"
                  >
                    <span>
                      <BsThreeDotsVertical className="font-bold" />
                    </span>
                  </Button>
                </Dropdown>
              </div>
            </div>
            <hr className="mt-2" />
            {/* pages 1 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm font_montserrat color_dark_1">
                    Css Ninja
                  </span>
                  <small className="font-light font_raleway color_dark_2">
                    3 hours ago
                  </small>
                </div>
              </div>
              <span>
                <MdOutlinePeopleAlt />
              </span>
            </div>
            <hr className="" />
          </div>
        </div>

        {/* Event */}
        {/* <div className="bg-blue-500 bg-opacity-15 p-4 rounded-md">
          <div className="flex justify-between items-center">
            <h1 className="font_montserrat">
              <FaGift />
            </h1>
            <Button
              shape="circle"
              className="flex justify-center items-center rounded-full bg-[#f4f4f4]"
            >
              <span>
                <BsThreeDotsVertical className="font-bold" />
              </span>
            </Button>
          </div>
          <div className="flex flex-col justify-between items-center gap-2">
            <Avatar size="large" icon={<UserOutlined />} />
            <h1 className="font_montserrat color_dark_1">
              Nelly has a new job!
            </h1>
            <h1 className="text-center font_raleway color_dark_2 text-sm font_montserrat color_dark_1">
              Send her message congratulating her for getting this job.
            </h1>
            <Button>Write Message</Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default RightSideBar;
