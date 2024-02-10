"use client";
import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineHideSource } from "react-icons/md";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa6";
import { Divider } from "antd";

const PostCardLabel = () => {
  return (
    <>
      <div className=" rounded-md p-2">
        <div className="flex flex-col">
          {/* Save Post */}

          <div className="flex hover:bg-slate-300 p-2 rounded-md cursor-pointer items-center gap-2">
            <FaRegBookmark className="" />
            <p className="text-sm">Save Post</p>
          </div>
          <Divider className="my-1" />

          {/* Notification Post */}

          <div className="flex hover:bg-slate-300 p-2 rounded-md cursor-pointer items-center gap-2">
            <IoMdNotificationsOutline className="text-xl" />
            <p className="text-sm">Turn Off Notification</p>
          </div>
          <Divider className="my-1" />

          {/* Hide Post */}

          <div className="flex hover:bg-slate-300 p-2 rounded-md cursor-pointer  items-center gap-2">
            <MdOutlineHideSource className="text-xl" />
            <p className="text-sm">Hide Post</p>
          </div>
          <Divider className="my-1" />

          {/* Edit post */}

          <div className="flex hover:bg-slate-300 p-2 rounded-md cursor-pointer  items-center gap-2">
            <AiFillEdit className="text-xl" />
            <p className="text-sm">Edit Post</p>
          </div>
          <Divider className="my-1" />

          {/* Delete post */}
          <div className="flex hover:bg-slate-300 p-2 rounded-md cursor-pointer  items-center gap-2">
            <AiOutlineDelete className="text-xl" />
            <p className="text-sm">Delete Post</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCardLabel;
