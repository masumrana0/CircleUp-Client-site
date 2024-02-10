"use client";
import { Avatar, Button, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { reactionItem } from "@/Components/newsfeed/reaction/ReactionItem";
import FullName from "@/service/name.service";
import PostCommentBox from "../shared/PostCommentBox";
import { IName } from "@/types/auth";
import { IPost, IReaction } from "@/types/newsfeed";
import img from "/public/unnamed.webp";
import { setPostId } from "@/Redux/Slices/unitlitySlice";
import { useGetAllCommentQuery } from "@/Redux/api/commentApi";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import PostCardDrwopDownItem from "../Dropdowns/Items/PostCardItems";
import { useGetAllReactionQuery } from "@/Redux/api/reactionApi";
import { getUserInfo } from "@/service/auth.service";
import { getUserReaction } from "@/utils/getUserSpecificReaction";
// reaction
import likeOutline from "/public/assets/reaction/likeOutline.png";
import like from "/public/assets/reaction/like.png";
import love from "/public/assets/reaction/love.png";
import haha from "/public/assets/reaction/haha.png";
import sad from "/public/assets/reaction/sad.png";

const FeedCard = ({ data }: { data: IPost }) => {
  const [showComments, setShowComments] = useState(false);

  // redux
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.themeSlice.theme);
  const { data: comments } = useGetAllCommentQuery(data._id);
  const { data: reactions } = useGetAllReactionQuery(data?._id);

  // handle added post id  for submiting post related work
  const handleAddedPostId = () => {
    dispatch(setPostId(data?._id as string));
  };

  let reaction: IReaction = {
    reaction: "like",
  };
  if (reactions && reactions.length > 0) {
    const userReaction = getUserReaction(reactions as IReaction[]);
    reaction = userReaction as unknown as IReaction;
  }

  // extract data for use
  const fullName = FullName(data?.user?.name as IName);
  const userProfilePicture =
    typeof data?.user === "object" && "profilePicture" in data.user
      ? data.user.profilePicture
      : "";

  const reactionImg = reaction?.reaction
    ? `${reaction?.reaction}`
    : `${likeOutline}`;

  // console.log(reactionImg);

  // Date format
  const formatDate = (createdAt: any) => {
    const date = new Date(createdAt);
    const monthAbbreviation = date.toLocaleString("default", {
      month: "short",
    }); // Get abbreviated month
    const day = date.getDate();
    const year = date.getFullYear();
    let hour = date.getHours();
    const minute = date.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";

    // Convert hour from 24-hour format to 12-hour format
    hour = hour % 12;
    hour = hour ? hour : 12; // 0 should be converted to 12

    return `${monthAbbreviation} ${day}, ${year}, ${hour}:${minute.toString().padStart(2, "0")} ${ampm}`;
  };

  return (
    <section
      className={`${theme === "light" ? "bg-[#212835]" : "bg-white"} p-4 rounded-md`}
    >
      <div className="flex justify-between mt-2 ">
        <div className="flex gap-2 ">
          <Link href="/profile">
            <Avatar
              src={userProfilePicture}
              className=" cursor-pointer "
              size="large"
              icon={<UserOutlined />}
            />
          </Link>
          <div className={`flex flex-col`}>
            <Link
              href="/profile"
              className={`${theme === "light" ? "text-white" : " text-gray-900"} user_heading cursor-pointer hover:underline`}
            >
              {fullName}
            </Link>
            <small
              className={`${theme === "light" ? "text-white" : " text-gray-900"}  user_sub_heading font-light`}
            >
              {formatDate(data?.createdAt)}
            </small>
          </div>
        </div>

        {/* three dots  */}
        <div>
          <Dropdown
            menu={{ items: PostCardDrwopDownItem }}
            placement="bottomRight"
            arrow
          >
            <Button
              shape="circle"
              className="flex justify-center items-center rounded-full bg-[#f4f4f4]"
            >
              <span>
                <BsThreeDots className="font-bold" />
              </span>
            </Button>
          </Dropdown>
        </div>
      </div>

      {/* Image and text */}
      <div>
        <div>
          <p
            className={`${theme === "light" ? "text-white" : " text-gray-900"}   my-2`}
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
          <div
            className="hover:bg-[#f4f4f4] rounded-md  flex justify-center items-center my-2 gap-2 cursor-pointer p-1 "
            onMouseEnter={handleAddedPostId}
          >
            <Dropdown menu={{ items: reactionItem }} placement="top" arrow>
              <div className="flex gap-2">
                <Image
                  src={likeOutline}
                  width={20}
                  height={20}
                  alt="like icon"
                  className=" transion-all duration-300"
                />
                <h2>{"like"} </h2>
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

      {/* comment section */}
      <div>
        {showComments && (
          <div>
            <PostCommentBox
              setShowComments={setShowComments}
              postId={data?._id}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default FeedCard;
