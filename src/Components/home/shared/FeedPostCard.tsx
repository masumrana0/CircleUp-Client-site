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
import { BiXCircle } from "react-icons/bi";
import { Textarea } from "@/Components/ui/textarea";
import { useGetAllPostQuery, useSubmitPostMutation } from "@/Redux/api/postApi";
import { useAppSelector } from "@/Redux/hooks";
import { IPost } from "@/types/newsfeed";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { MdPermMedia } from "react-icons/md";
import path from "path";

const FeedPostCard = () => {
  const [postText, setPostText] = useState("Hello i am masum Rana");
  const [isLoading, setIsLoading] = useState(false);
  // const [images, setImages] = useState(null);
  const [imgs, setImg] = useState([]);
  const [imgsPath, setImgsPath] = useState([]);
  const [imgUrls, setImgUrl] = useState([]);
  const [submitPost, options] = useSubmitPostMutation();
  // const theme = useAppSelector((state) => state.themeSlice.theme);
  const theme = "light";
  const { data: allPost } = useGetAllPostQuery(null);

  const imgebase64 = (file: File) => {
    const reader = new FileReader();

    if (file instanceof Blob) {
      reader.readAsDataURL(file);

      return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reject(err);
      });
    } else {
      return Promise.reject("Invalid file type");
    }
  };

  // handle submit image
  const handleSubmitImage = async (e: FormEvent<HTMLFormElement>) => {
    const image = e.target.files && e.target.files[0];
    // console.log(e);

    setImgsPath([...imgsPath, image]);

    if (image) {
      const file = await imgebase64(image);
      setImg([...imgs, file]);
      // console.log(file);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImgs = [...imgs];
    updatedImgs.splice(index, 1);
    setImg(updatedImgs);
  };

  const handlePost = async () => {
    const api_key = "e76b695c8c9d3f4bfa293469ec3905ed";
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${api_key}`;

    // const uploadPromises = imgsPath?.map(async (path: string) => {

    //   console.log(dataFatch);
    // })
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];

    // }

    const data = new FormData();
    const images: string[] = [];
    for (let i = 0; i < imgsPath.length; i++) {
      const path = imgsPath[i];
      data.append("image", path);
      const dataFatch = await fetch(image_hosting_url, {
        method: "POST",
        body: data,
      })
        .then((res) => {
          return res.json();
        })
        .then((data: any) => {
          const url = data?.data?.display_url;
          // console.log(data);

          images.push(url);
          console.log("Finished");
        });
    }

    const postData: IPost = {
      postText: postText,
      images: images,
    };

    const res = await submitPost(postData as IPost);
    console.log(res);
  };

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

              <div className="">
                <div className="flex justify-center flex-wrap relative">
                  {imgs.length > 0 &&
                    imgs.map((img, index) => (
                      <div key={index} className="relative">
                        <Image
                          className="w-[300px] h-[200px]"
                          src={img}
                          width={300}
                          height={200}
                          alt={`image-${index}`}
                        />
                        <button
                          className="absolute top-0 "
                          onClick={() => handleRemoveImage(index)}
                        >
                          <BiXCircle className="text-3xl bg-black-400   text-white " />
                        </button>
                      </div>
                    ))}
                </div>
              </div>
              <DialogFooter className="flex justify-between items-center sm:justify-between">
                <div className="flex gap-4">
                  <label htmlFor="uploadImage">
                    <input
                      multiple
                      name="uploadImage"
                      type="file"
                      id="uploadImage"
                      className="hidden"
                      onChange={(e) => handleSubmitImage(e)}
                    />
                    <MdPermMedia className="text-violet-500 text-2xl cursor-pointer" />
                  </label>

                  <BsEmojiSmileFill className="text-violet-500 text-2xl cursor-pointer" />
                </div>
                {/* <DialogClose > */}
                <button
                  onClick={handlePost}
                  disabled={postText === "" ? true : false}
                  type="submit"
                  className="px-5 text-md font-bold text-white rounded bg-violet-500 hover:bg-violet-800 transition-colors duration-300"
                >
                  Post
                </button>
                {/* </DialogClose> */}
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
