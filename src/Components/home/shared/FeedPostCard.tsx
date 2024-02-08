"use client";
// Import necessary dependencies
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/Components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/Components/ui/select";
import { Textarea } from "@/Components/ui/textarea";
import { useSubmitPostMutation } from "@/Redux/api/postApi";
import { useAppSelector } from "@/Redux/hooks";
import { message } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEmojiSmileFill } from "react-icons/bs";
import { MdPermMedia } from "react-icons/md";
const img_hosting_token = "100d68a470e46ca6b971169172b3b2a5"


const FeedPostCard = () => {

  const router = useRouter();

  const [postText, setPostText] = useState("");
  const [submitPost, options] = useSubmitPostMutation();
  const theme = useAppSelector((state) => state.themeSlice.theme);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

  const handlePost = async (data: any) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      const imageResponse = await axios.post(image_hosting_url, formData);

      if (imageResponse.data.success) {
        const imageUrl = imageResponse.data.data.display_url;

        await axios.post('https://circleup-backend.vercel.app/api/v1/story/create-story', {
          about: data.about,
          image: imageUrl
        });

        message.success('submitted successfully');
        router.push('/');
      } else {
        message.error('Image upload failed');
      }
    } catch (error) {
      console.error('Error:', error);
      message.error('Something went wrong');
    }
  };

  // const handlePost = async () => {
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
            <DialogTrigger className="w-full outline-none p-2 rounded-md bg-white ">
              <input
                name="post"
                className="w-full outline-none"
                placeholder="What's on your mind?"
              />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white">
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
