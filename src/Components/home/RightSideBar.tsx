import { Avatar, Button, Modal, Upload } from "antd";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { UserOutlined } from "@ant-design/icons";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaGift, FaPlus } from "react-icons/fa6";

const RightSideBar = () => {
  return (
    <section>
      <div className="flex flex-col gap-4  ">
        <div className="bg-white p-4 rounded-md">
          <div>
            <div className="flex justify-between  items-center">
              <h1 className="font_montserrat">Stories</h1>
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
            {/* pages 1 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center border border-dotted cursor-pointer">
                  <span>
                    <FaPlus />
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font_montserrat color_dark_1">
                    Add a new Story
                  </span>
                  <small className="font-light font_raleway color_dark_2  text-[12px]">
                    Share an image, a video or some text
                  </small>
                </div>
              </div>
            </div>
            <hr className="" />
            {/* pages 2 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm font_montserrat color_dark_1">
                    Dan Walker
                  </span>
                  <small className="font-light font_raleway color_dark_2">
                    1 hour ago
                  </small>
                </div>
              </div>
            </div>
            <hr className="" />
            {/* pages 3 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm font_montserrat color_dark_1">
                    John Walker
                  </span>
                  <small className="font-light font_raleway color_dark_2">
                    1 hour ago
                  </small>
                </div>
              </div>
            </div>
            <hr className="" />
            {/* pages 4 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm font_montserrat color_dark_1">
                    John Walker
                  </span>
                  <small className="font-light font_raleway color_dark_2">
                    1 hour ago
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested friend */}
        <div className="bg-white p-4 rounded-md">
          <div>
            <div className="flex justify-between items-center ">
              <h1 className="font_montserrat">Suggested Friends</h1>
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
            {/* pages 2 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm font_montserrat color_dark_1">
                    Js Ninja
                  </span>
                  <small className="font-light font_raleway color_dark_2">
                    1 second ago
                  </small>
                </div>
              </div>
              <span>
                <MdOutlinePeopleAlt />
              </span>
            </div>
            <hr className="" />
            {/* pages 3 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm font_montserrat color_dark_1">
                    React Icons
                  </span>
                  <small className="font-light font_raleway color_dark_2">
                    5 hours ago
                  </small>
                </div>
              </div>
              <span>
                <MdOutlinePeopleAlt />
              </span>
            </div>
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
