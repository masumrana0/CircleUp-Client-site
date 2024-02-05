"use client";
import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { IComment } from "@/types/newsfeed";

const Comment = ({ comment }: { comment: IComment }) => {
  return (
    <div className="p-2 flex gap-2 ">
      <Avatar className="border " size="large" icon={<UserOutlined />} />
      <div>
        <div>
          <div className="bg-gray-200 p-2 rounded-md mt-2 ">
            <h1 className="font-bold color_dark_1">John Smith</h1>
            <p className="text-sm   color_dark_2">{comment?.comment}</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button className="text-[12px] my-1 cursor-pointer hover:underline color_dark_2">
            Like
          </button>
          <button className="text-[12px] my-1 cursor-pointer hover:underline color_dark_2">
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
