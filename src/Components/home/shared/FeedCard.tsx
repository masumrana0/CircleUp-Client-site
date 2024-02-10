"use client";

// essesential Imports

import { Avatar, Button, Dropdown } from "antd";
// icons
import { UserOutlined } from "@ant-design/icons";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";

// framework essetional
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Components
import { reactionItem } from "@/Components/newsfeed/reaction/ReactionItem";
import FullName from "@/service/name.service";
import PostCommentBox from "../shared/PostCommentBox";

// types
import { IName } from "@/types/auth";
import { IPost } from "@/types/newsfeed";

// side data
import img from "/public/unnamed.webp";

// redux essential imports
import { setPostId } from "@/Redux/Slices/unitlitySlice";
import { useGetAllCommentQuery } from "@/Redux/api/commentApi";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import PostCardDrwopDownItem from "../Dropdowns/Items/PostCardItems";

const FeedCard = ({ data }: { data: IPost }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showComments, setShowComments] = useState(false);

  // redux
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.themeSlice.theme);
  const reaction = useAppSelector((state) => state.reaction.reaction);
  const { data: comments } = useGetAllCommentQuery(data._id);

  // handle added post id  for submiting post related work
  const handleAddedPostId = () => {
    dispatch(setPostId(data?._id as string));
  };

  // extract data for use
  const fullName = FullName(data?.user?.name as IName);
  const userProfilePicture =
    typeof data?.user === "object" && "profilePicture" in data.user
      ? data.user.profilePicture
      : "";

  return (
    <section
      className={`${theme === "light" ? "bg-[#212835]" : "bg-white"} p-4 rounded-md`}
    >
      <div className="flex justify-between mt-2 ">
        <div className="flex gap-2 ">
          <Avatar
            src={userProfilePicture}
            className=" cursor-pointer "
            size="large"
            icon={<UserOutlined />}
          />
          <div className={`flex flex-col`}>
            <span
              className={`${theme === "light" ? "text-white" : " text-gray-900"} user_heading cursor-pointer hover:underline`}
            >
              {fullName}
            </span>
            <small
              className={`${theme === "light" ? "text-white" : " text-gray-900"} user_heading cursor-pointer hover:underline  user_sub_heading font-light`}
            >
              July 26 2018, 01:03pm
              {/* {data?.createdAt} */}
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
          <div
            className="hover:bg-[#f4f4f4] rounded-md  flex justify-center items-center my-2 gap-2 cursor-pointer p-1 "
            onMouseEnter={handleAddedPostId}
          >
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
