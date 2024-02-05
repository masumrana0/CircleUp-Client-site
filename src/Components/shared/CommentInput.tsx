import { Avatar, Input } from "antd";
import React from "react";
import { IoSend } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { SiSendinblue } from "react-icons/si";

const CommentInput = () => {
  return (
    <div>
      <div className="flex bg-gray-100 rounded-md py-4 justify-between items-center border">
        <div className="flex ml-2">
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          <Input placeholder="Write Your Comment" variant="borderless" />
        </div>
        <div className="flex gap-2 justify-center items-center mr-4">
          <MdEmojiEmotions className="cursor-pointer" />
          <IoSend className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
