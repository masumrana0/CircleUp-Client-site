"use client";
// Import necessary dependencies
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Avatar, Card, Input } from "antd";
import { MdPermMedia } from "react-icons/md";
import { FaSmile } from "react-icons/fa";
import { useSubmitPostMutation } from "@/Redux/api/postApi";
import { IPost } from "@/types/newsfeed";

const FeedPostCard = () => {
  const [postText, setPostText] = useState("");
  const [submitPost, options] = useSubmitPostMutation();

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
    <Card title="What's on your mind?" bordered={false}>
      <form onSubmit={handleSubmitPost}>
        <div className="flex items-center">
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
          <Input
            name="post"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="Write something"
            variant="borderless"
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div className="flex gap-2 text-xl">
            <FaSmile /> <MdPermMedia />
          </div>
          <button
            type="submit"
            className="px-5 text-md py-1 font-bold text-white rounded bg-violet-500 hover:bg-violet-800 transition-colors duration-300"
          >
            Post
          </button>
        </div>
      </form>
    </Card>
  );
};

export default FeedPostCard;
