/**
 * Title: 'Story section dynamic by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 18-02-2024
 *
 */

import React, { FormEvent, useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import StoriesCardDrwopDownItem from "../home/Dropdowns/Items/StoriesItems";
import { FaPlus } from "react-icons/fa6";
import {
  useCreateStoryMutation,
  useGetAllStoryQuery,
} from "@/Redux/api/storyApi";
import { IStory } from "@/types/newsfeed";
import Image from "next/image";

const Story = async () => {
  const [story, setStory] = useState();
  const [hostingLoading, setHostingLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const formData = new FormData();
  const theme = "light";
  const api_key = "e76b695c8c9d3f4bfa293469ec3905ed";
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${api_key}`;
  
  // redux
  const [createStory] = useCreateStoryMutation();
  const { data } = useGetAllStoryQuery(null);

  const handleSubmitStory = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('hello klsdjfkljsd');
    setHostingLoading(true);
    const image = e.target.files && e.target.files[0];
    formData.append("image", image);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (data: any) => {
        const url = data?.data?.display_url;
        const res = await createStory({ story: url });
        console.log(res);
      });

    // eslint-disable-next-line react-hooks/rules-of-hooks
  };
  // console.log(imgUrl.length);
  useEffect(() => {
    async function fetchData() {
      const storyData = {
        story: imgUrl,
      };
      const res = await createStory(storyData as IStory);
      // console.log(res);
    }

    fetchData();
  }, [createStory, imgUrl]);

  return (
    <div
      className={`${theme === "light" ? "bg-white" : "bg-gray-400"} p-4 rounded-md`}
    >
      <div>
        <div className="flex justify-between  items-center">
          <h1
            className={`${theme === "light" ? "text-white" : " color_dark_1"} font_montserrat `}
          >
            Stories
          </h1>
          <div>
            <Dropdown menu={{ items: StoriesCardDrwopDownItem }}>
              <Button
                //   onClick={() => setIsOpen2(!isOpen2)}
                shape="circle"
                className="flex justify-center items-center rounded-full bg-[#f4f4f4]"
              >
                <span>
                  <BsThreeDotsVertical className="font-bold" />
                </span>
              </Button>
            </Dropdown>
          </div>
        </div>
        <hr className="mt-2" />
        {/* pages 1 */}
        <div className="flex justify-between items-center my-2">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center border border-dotted cursor-pointer">
              <label htmlFor="uploadStoryImage">
                <input
                  name="uploadStoryImage"
                  type="file"
                  id="uploadStoryImage"
                  className="hidden"
                  onChange={(e) => handleSubmitStory(e)}
                />
                <FaPlus className="text-violet-500 text-2xl cursor-pointer" />
              </label>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font_montserrat color_dark_1">
                Add a new Story
              </span>
              <small className="font-light font_raleway color_dark_2  text-[12px]">
                Share an image, a video or some text
              </small>
            </div>
          </div>
        </div>
        <hr className="" />
        {data?.map((story: IStory, index: number) => (
          <div key={index} className="flex justify-between items-center my-2">
            <div className="flex gap-2 items-center">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex justify-center items-center border border-dotted cursor-pointer">
                <Image
                  src={story?.story}
                  width={50}
                  height={50}
                  alt="storyimg"
                  className="rounded-full w-10 h-10"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font_montserrat color_dark_1">
                  Add a new Story
                </span>
                <small className="font-light font_raleway color_dark_2  text-[12px]">
                  Share an image, a video or some text
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
