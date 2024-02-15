"use client";
import React, { useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { IComment, IComment_reply } from "@/types/newsfeed";
import { IName } from "@/types/auth";
import FullName from "@/service/name.service";
import CommentReply from "@/Components/PostCard/CommentReply";
import CommentCard from "@/Components/CommentSection/CommentCard";
import { useGetAllComment_repliesQuery } from "@/Redux/api/replyCommentApi";
import CommentReplyCard from "@/Components/CommentSection/CommentReplyCard";

const Comment = ({ comment }: { comment: IComment }) => {
  const [isReplyOpen, setReplyOpen] = useState(false);
  // redux
  const { data: AllReply } = useGetAllComment_repliesQuery(
    comment?._id as string
  );

  // extract data
  const fullName = FullName(comment?.user?.name as IName);
  const userProfilePicture =
    typeof comment?.user === "object" && "profilePicture" in comment.user
      ? comment.user.profilePicture
      : "";

  return (
    <div className="p-2 flex gap-2   ">
      <div>
        <Avatar src={userProfilePicture} size="large" icon={<UserOutlined />} />
      </div>
      <div>
        <div>
          <CommentCard comment={comment} />
          <div className="flex  items-center gap-5  ">
            {/* <button className="text-[12px]   cursor-pointer hover:underline color_dark_2">
              Like
            </button> */}
            <button
              onClick={() => setReplyOpen(!isReplyOpen)}
              className="text-[12px]   hover:underline color_dark_2"
            >
              Reply
            </button>
          </div>
        </div>

        <div className="lg:w-[500px] w-[300px] lg:ms-10 ms-5 mt-2">
          {isReplyOpen && (
            <>
              <div>
                {AllReply?.length > 0 &&
                  AllReply?.map((reply: IComment_reply) => (
                    <CommentReplyCard
                      key={reply?._id}
                      comment_reply={reply as IComment_reply}
                    />
                  ))}
              </div>

              <CommentReply comment_id={comment?._id as string} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
