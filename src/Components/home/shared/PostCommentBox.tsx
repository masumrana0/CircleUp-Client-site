"use client";
import React from "react";
import { BsXCircle, BsEmojiSmile, BsCamera, BsSend } from "react-icons/bs";
import { Avatar, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
// import EmojiPicker from "emoji-picker-react";
import {
  useGetAllCommentQuery,
  useSubmitCommentMutation,
} from "@/Redux/api/commentApi";
import { IComment } from "@/types/newsfeed";
import Comment from "./Comment";

const PostCommentBox = ({ setShowComments, postId }: any) => {
  const [submitComment] = useSubmitCommentMutation();
  const { data: comments } = useGetAllCommentQuery(postId);
  const handlePostComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // Explicitly cast form to FormData
    const formData = new FormData(form);

    const comment = formData.get("commentbox") as string;
    const commentData = {
      post: postId,
      comment: comment,
    };

    const res = await submitComment(commentData);
    // console.log(res);

    form.reset();
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-b-2 border-gray-300 p-3">
        <h3>Comments ({comments?.length})</h3>
        <button onClick={() => setShowComments(false)}>
          <BsXCircle className="text-xl" />
        </button>
      </div>
      {comments?.length > 2 ? (
        <p className="text-sm underline cursor-pointer my-2">
          View All Comments
        </p>
      ) : (
        ""
      )}
      <div className=" w-full">
        {comments?.map((comment: IComment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
      <div className="mt-5">
        <div className="flex gap-2 bg-gray-300 rounded-lg ">
          <Avatar
            className="border-2"
            size="large"
            // src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"
            icon={<UserOutlined />}
          />
          <div className="w-full mt-4    rounded-md ">
            <form onSubmit={handlePostComment}>
              <input
                required
                name="commentbox"
                className="outline-none w-full p-2 text-sm bg-gray-300  rounded-md "
                placeholder="Write your comment..."
              />

              <div className="flex w-full justify-between  items-center gap-2 p-2 ">
                <div className="flex gap-2">
                  <button>
                    <BsEmojiSmile className="text-xl" />
                  </button>
                  <button>
                    <BsCamera className="text-xl" />
                  </button>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-violet-500  font-semibold text-white hover:bg-violet-800"
                >
                  <BsSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCommentBox;
