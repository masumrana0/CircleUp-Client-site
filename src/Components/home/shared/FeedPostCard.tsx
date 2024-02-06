"use client";
// Import necessary dependencies
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Avatar, Card, Input } from "antd";
import { MdPermMedia } from "react-icons/md";
import { FaSmile } from "react-icons/fa";
import { useSubmitPostMutation } from "@/Redux/api/postApi";
import { IPost } from "@/types/newsfeed";
import { useAppSelector } from "@/Redux/hooks";

const FeedPostCard = () => {
  const [postText, setPostText] = useState("");
  const [submitPost, options] = useSubmitPostMutation();
  const theme = useAppSelector((state) => state.themeSlice.theme);

  const handleSubmitPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (postText.length > 5) {
      try {
        const postData: IPost = {
          postText: postText,
        };
        const response = await submitPost(postData);

        // Reset the input field
        setPostText("");
      } catch (error) {
        console.error("Error submitting post:", error);
        // Handle the error as needed
      }
    }
  };

  return (
    <div
      className={`${theme === "light" ? "bg-[#212835]" : "bg-white"} rounded-md p-4`}
    >
      <form
        className="flex justify-between items-center"
        onSubmit={handleSubmitPost}
      >
        <div className="flex w-full mr-2 items-center gap-2 justify-center">
          <Avatar
            className="w-full"
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
          />
          <input
            name="post"
            className="w-full outline-none p-2 rounded-md"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="What's on your mind?"
          />
        </div>
        <button
          type="submit"
          className="px-5 text-md py-2 font-bold text-white rounded bg-violet-500 hover:bg-violet-800 transition-colors duration-300"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default FeedPostCard;
