"use client";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Divider } from "antd";
import Link from "next/link";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";

import { IPost } from "@/types/newsfeed";
import { Dropdown } from "antd";
import Image from "next/image";
import PostCommentBox from "../shared/PostCommentBox";
import img from "/public/unnamed.webp";

import { reactionItem } from "@/Components/newsfeed/reaction/ReactionItem";
import { setPostId } from "@/Redux/Slices/unitlitySlice";
import { useGetAllCommentQuery } from "@/Redux/api/commentApi";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { FaRegBookmark } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineHideSource } from "react-icons/md";
import { TbShare3 } from "react-icons/tb";

const FeedCard = ({ data }: { data: IPost }) => {
  const [isOpen, setIsOpen] = useState(false);

  const theme = useAppSelector((state) => state.themeSlice.theme);

  const { reaction } = useAppSelector((state) => state.reaction);
  // console.log(reaction);

  const { data: comments } = useGetAllCommentQuery(data._id);

  const dispatch = useAppDispatch();
  dispatch(setPostId(data?._id as string));
  const [showComments, setShowComments] = useState(false);

  return (
    <section
      className={`${theme === "light" ? "bg-[#212835]" : "bg-white"} p-4 rounded-md`}
    >
      <div className="flex justify-between mt-2 ">
        <div className="flex gap-2 ">
          <Avatar
            className=" cursor-pointer "
            size="large"
            icon={<UserOutlined />}
          />
          <div className={`flex flex-col`}>
            <span
              className={`${theme === "light" ? "text-white" : " text-gray-900"} user_heading cursor-pointer hover:underline`}
            >
              John Smith
            </span>
            <small
              className={`${theme === "light" ? "text-white" : " text-gray-900"} user_heading cursor-pointer hover:underline  user_sub_heading font-light`}
            >
              July 26 2018, 01:03pm
            </small>
          </div>
        </div>
        <div className="relative">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            shape="circle"
            className="flex justify-center items-center rounded-full bg-[#f4f4f4]"
          >
            <span>
              <BsThreeDots className="font-bold" />
            </span>
          </Button>

          {/* TODO: make reusable popup card    */}
          <div className="absolute w-[200px] right-6">
            {isOpen ? (
              <>
                <div className="bg-gray-200 rounded-md p-3">
                  <div className="flex flex-col">
                    {/* Save Post */}
                    <div>
                      <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
                        <FaRegBookmark className="" />
                        <p className="text-sm">Save Post</p>
                      </div>
                      <Divider className="my-2" />
                    </div>
                    {/* Notification Post */}
                    <div>
                      <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
                        <IoMdNotificationsOutline className="text-xl" />
                        <p className="text-sm">Turn Off Notification</p>
                      </div>
                      <Divider className="my-2" />
                    </div>
                    {/* Save Post */}
                    <div>
                      <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer  items-center gap-2">
                        <MdOutlineHideSource className="text-xl" />
                        <p className="text-sm">Hide Post</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* Image and text */}
      <div>
        <div>
          <p
            className={`${theme === "light" ? "text-white" : " text-gray-900"}  font-light text-sm my-2`}
          >
            {data?.postText}
          </p>
        </div>
        <Link href={`/photo/${data._id}`}>
          <div className="w-full h-[300px] overflow-hidden rounded-md bg-[#f4f4f4] flex justify-center items-center ">
            <Image src={img} width={300} height={300} alt="user post img" />
          </div>
        </Link>
      </div>

      {/* Footer */}
      <div className="flex justify-between gap-2 py-2">
        <div className="flex flex-col w-full mt-2 justify-between">
          <small
            className={`${theme === "light" ? "text-white" : " text-gray-900"} text-start  mb-2`}
          >
            4 Likes
          </small>
          <hr />
          <div className="hover:bg-[#f4f4f4] rounded-md  flex justify-center items-center my-2 gap-2 cursor-pointer p-1 ">
            <Dropdown menu={{ items: reactionItem }} placement="top" arrow>
              <div className="flex gap-2">
                <Image
                  src={
                    reaction
                      ? `/assets/reaction/${reaction}.png`
                      : "/assets/reaction/likeOutline.png"
                  }
                  width={20}
                  height={20}
                  alt="like icon"
                  className=" transion-all duration-300"
                />
                <h2>{reaction ? reaction : "Like"} </h2>
              </div>
            </Dropdown>
          </div>
        </div>
        <div className="flex flex-col w-full mt-2 justify-between">
          <div
            className={`${theme === "light" ? "text-white" : " text-gray-900"} text-center text-sm  mb-2`}
          >
            {comments?.length} {comments?.length <= 1 ? "comment" : "comments"}
          </div>
          <hr />
          <div className="hover:bg-[#f4f4f4] rounded-md  flex justify-center items-center my-2 gap-2 cursor-pointer p-1 ">
            <button
              onClick={() => setShowComments(true)}
              className="flex items-center gap-2"
            >
              {" "}
              <FaRegComment className="text-xl" />
              <span className="font-raleway">Comment</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full mt-2 justify-between">
          <small
            className={`${theme === "light" ? "text-white" : " text-gray-900"} text-end  mb-2`}
          >
            0 share
          </small>
          <hr />
          <div className="hover:bg-[#f4f4f4] rounded-md w-full flex justify-center items-center my-2 gap-2 cursor-pointer p-1 ">
            {" "}
            <TbShare3 className="text-xl" />
            <span className="font_raleway">Share</span>
          </div>
        </div>
      </div>
      {showComments && (
        <div>
          <PostCommentBox
            setShowComments={setShowComments}
            postId={data?._id}
          />
        </div>
      )}
    </section>
  );
};

export default FeedCard;
