import { Avatar, Button } from "antd";
import React from "react";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { UserOutlined } from "@ant-design/icons";
import { BiSolidLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa6";
import Comment from "@/Components/home/shared/Comment";
import Image from "next/image";
import img from "/public/unnamed.webp";
import CommentInput from "../../../../Components/shared/CommentInput";

const PostDetailPage = () => {
  return (
    <section>
      <div className="flex  min-h-[90vh] ">
        <div className="w-9/12 bg-gray-200 flex justify-center items-center">
          <Image alt="example" src={img} width={400} height={400} />
        </div>
        <div className="w-3/12 ">
          {/* Parent */}
          <div className="bg-gray-300 ">
            <div className="flex justify-between mt-2">
              <div className="flex gap-2 ">
                <Avatar
                  className="border "
                  size="large"
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
                  icon={<UserOutlined />}
                />
                <div className="flex flex-col">
                  <span className="user_heading">John Smith</span>
                  <small className="user_sub_heading font-light">
                    July 26 2018, 01:03pm
                  </small>
                </div>
              </div>
              <Button
                shape="circle"
                className="flex justify-center items-center rounded-full bg-[#f4f4f4]"
              >
                <span>
                  <BsThreeDots className="font-bold" />
                </span>
              </Button>
            </div>
            <div className="flex justify-between my-4 px-4">
              <h1 className="text-sm color_dark-2">10 Likes</h1>
              <h1 className="text-sm color_dark-2">10 Comments</h1>
            </div>
            <hr className="border border-gray-300" />
            {/* line comment */}
            <div className="flex ">
              <div className="hover:bg-[#f4f4f4] rounded-md w-full flex justify-center items-center my-2 gap-2 cursor-pointer p-1 ">
                {" "}
                <BiSolidLike />
                <span className="font_raleway">Like</span>
              </div>
              <div className="hover:bg-[#f4f4f4] rounded-md w-full flex justify-center items-center my-2 gap-2 cursor-pointer p-1 ">
                {" "}
                <FaComment />
                <span className="font_raleway">Comment</span>
              </div>
            </div>
          </div>
          {/* Comments */}
          <div>{/* <Comment /> */}</div>
        </div>
      </div>
    </section>
  );
};

export default PostDetailPage;
