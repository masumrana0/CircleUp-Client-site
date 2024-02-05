import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { FaBookmark, FaLocationDot, FaRegBookmark } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import Weather from "../newsfeed/Wealther/Weather";

const LeftSideBar = () => {
  return (
    <section>
      <div className="flex flex-col   gap-4 min-h-[90vh]">
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
        <div className="bg-white p-4 rounded-md ">
          <div>
            <div className="flex justify-between items-center ">
              <h1 className="font_montserrat">Latest Activity</h1>
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
            {/* section 1 */}
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-2 items-center">
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="flex flex-col">
                  <span className="text-sm font_montserrat color_dark_1">
                    Css Ninja
                  </span>
                  <small className="font-light color_dark_2 user_sub_heading">
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
                  <span className="text-sm font_montserrat color_dark_1">
                    Css Ninja
                  </span>
                  <small className="font-light color_dark_2  user_sub_heading">
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
                  <span className="text-sm font_montserrat color_dark_1">
                    Css Ninja
                  </span>
                  <small className="font-light color_dark_2 user_sub_heading">
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
