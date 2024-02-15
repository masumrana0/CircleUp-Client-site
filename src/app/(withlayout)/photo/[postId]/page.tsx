"use client";
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
import { useGetAllCommentQuery } from "@/Redux/api/commentApi";
import { IComment } from "@/types/newsfeed";
import { useAppSelector } from "@/Redux/hooks";

const PostDetailPage = ({ params }: { params: any }) => {
  // const theme = useAppSelector((state) => state.themeSlice.theme);
  const theme = "light";

  const id = params?.postId;
  const { data: comments } = useGetAllCommentQuery(id);
  // console.log(id);

  return (
    <div className="flex flex-col lg:flex-row pt-4 lg:pt-24  min-h-[95vh] ">
      <div className="w-full lg:w-9/12  flex justify-center items-center">
        <Image alt="example" src={img} width={400} height={400} />
      </div>
      <div
        className={`${theme === "light" ? "bg-gray-200" : "bg-[#212835]"} w-full mt-4 lg:mt-0 lg:w-3/12  rounded-md `}
      >
        {/* Parent */}
        <div className="">
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
            <h1 className="text-sm  color_dark-2">10 Likes</h1>
            <div className="text-center text-sm  color_dark-2">
              {comments?.length}{" "}
              {comments?.length <= 1 ? "comment" : "comments"}
            </div>
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
        <div>
          {comments?.map((comment: IComment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </div>
        <CommentInput />
      </div>
    </div>
  );
};

export default PostDetailPage;
