"use client";
// Import necessary dependencies
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { useSubmitPostMutation } from "@/Redux/api/postApi";
import { useAppSelector } from "@/Redux/hooks";
import { IPost } from "@/types/newsfeed";
import { Input } from "antd";
import React, { useState } from "react";

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
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Dialog>
            <DialogTrigger asChild>
              <input
                name="post"
                className="w-full outline-none p-2 rounded-md bg-white text-black"
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="What's on your mind?"
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input
                    id="name"
                    defaultValue="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Input
                    id="username"
                    defaultValue="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <button type="submit">Save changes</button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <Button
          type="submit"
          disabled
          className="px-5 text-md py-2 font-bold text-white rounded bg-violet-500 hover:bg-violet-800 transition-colors duration-300"
        >
          Post
        </Button>
      </form>
    </div>
  );
};

export default FeedPostCard;
