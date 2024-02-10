"use client";
import React from "react";
import { MdOutlineHideSource } from "react-icons/md";

const SuggestedFriendsLabel = () => {
  return (
    <>
      <div className="flex hover:bg-slate-300   rounded-sm px-2 py-0.5 cursor-pointer  items-center  ">
        <MdOutlineHideSource className="text-xl" />
        <p className="text-sm">Hide </p>
      </div>
    </>
  );
};

export default SuggestedFriendsLabel;
