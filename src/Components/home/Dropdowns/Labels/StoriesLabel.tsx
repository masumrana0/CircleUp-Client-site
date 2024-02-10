"use client";
import React from "react";
import { MdOutlineHideSource } from "react-icons/md";

const StoriesLabel = () => {
  return (
    <>
      <div className="flex hover:bg-slate-300 p-2 rounded-md cursor-pointer  items-center gap-2">
        <MdOutlineHideSource className="text-xl" />
        <p className="text-sm">Hide Stories</p>
      </div>
    </>
  );
};

export default StoriesLabel;
