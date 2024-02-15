import React, { FormEvent, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import StoriesCardDrwopDownItem from "../home/Dropdowns/Items/StoriesItems";
import { FaPlus } from "react-icons/fa6";

const Story = () => {
  const [story, setStory] = useState();
  const data = new FormData();

  const theme = "light";
  const api_key = "e76b695c8c9d3f4bfa293469ec3905ed";
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${api_key}`;

  const handleSubmitStory = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('hello klsdjfkljsd');

    const image = e.target.files && e.target.files[0];
    data.append("image", image);
    fetch(image_hosting_url, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data: any) => {
        // console.log(data.data.display_url, "99");
        // setImgUrl([...imgUrls, data?.data?.display_url]);
      });
  };

  return (
    <div
      className={`${theme === "light" ? "bg-[#212835]" : "bg-white"} p-4 rounded-md`}
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
              <label htmlFor="uploadImage">
                <input
                  multiple
                  name="uploadImage"
                  type="file"
                  id="uploadImage"
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
      </div>
    </div>
  );
};

export default Story;
