"use client";
// Import necessary dependencies
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Textarea } from "@/Components/ui/textarea";
import { useGetAllPostQuery, useSubmitPostMutation } from "@/Redux/api/postApi";
import { useAppSelector } from "@/Redux/hooks";
import { IPost } from "@/types/newsfeed";

import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { MdPermMedia } from "react-icons/md";

const FeedPostCard = () => {
  const [postText, setPostText] = useState("");
  const [submitPost, options] = useSubmitPostMutation();
  const theme = useAppSelector((state) => state.themeSlice.theme);
  const { data: allPost, isLoading } = useGetAllPostQuery(null);
  console.log(allPost);

  const handlePost = async () => {
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

  // const handleSubmitPost = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (postText.length > 5) {
  //     try {
  //       const postData: IPost = {
  //         postText: postText,
  //       };
  //       const response = await submitPost(postData);

  //       // Reset the input field
  //       setPostText("");
  //     } catch (error) {
  //       console.error("Error submitting post:", error);
  //       // Handle the error as needed
  //     }
  //   }

  // };

  return (
    <div
      className={`${theme === "light" ? "bg-[#212835]" : "bg-white"} rounded-md p-4`}
    >
      <div className="flex justify-between items-center">
        <div className="flex w-full mr-2 items-center gap-2 justify-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Dialog>
            <DialogTrigger className="w-full outline-none rounded-md bg-white ">
              <input
                name="post"
                className="w-full outline-none border rounded-xl p-2"
                placeholder="What's on your mind?"
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]  bg-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  Create Post
                </DialogTitle>
              </DialogHeader>
              <hr />
              <div className="flex gap-3 items-center">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-md">Samsul kobir</p>
                  <Select>
                    <SelectTrigger className="w-[90px] bg-white text-black px-2">
                      <SelectValue placeholder="Public" />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-black">
                      <SelectGroup>
                        <SelectItem value="apple">Public</SelectItem>
                        <SelectItem value="banana">Friend</SelectItem>
                        <SelectItem value="blueberry">Only Me</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Textarea
                name="post"
                value={postText}
                className="w-full outline-none  text-xl py-4"
                onChange={(e) => setPostText(e.target.value)}
                placeholder="What's on your mind?"
              />
              <DialogFooter className="flex justify-between items-center sm:justify-between">
                <div className="flex gap-4">
                  <MdPermMedia className="text-violet-500 text-2xl cursor-pointer" />
                  <BsEmojiSmileFill className="text-violet-500 text-2xl cursor-pointer" />
                </div>
                <DialogClose asChild>
                  <Button
                    onClick={handlePost}
                    disabled={postText === "" ? true : false}
                    type="submit"
                    className="px-5 text-md font-bold text-white rounded bg-violet-500 hover:bg-violet-800 transition-colors duration-300"
                  >
                    Post
                  </Button>
                </DialogClose>
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
      </div>
    </div>
  );
};

export default FeedPostCard;
