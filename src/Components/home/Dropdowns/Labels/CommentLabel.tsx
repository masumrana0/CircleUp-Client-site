"use client";
import React from "react";

const CommentLabel = () => {
  return (
    <div className="w-full">
      <div>
        <textarea
          className="border-none outline-none w-[400px]"
          placeholder="write a comment..."
        />
      </div>
      <div></div>
    </div>
  );
};

export default CommentLabel;
