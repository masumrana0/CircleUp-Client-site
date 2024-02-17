"use client";
import { useSubmitComment_replyMutation } from "@/Redux/api/replyCommentApi";
import { IComment_reply } from "@/types/newsfeed";
import { FormEvent, useState } from "react";
import { BsXCircle, BsEmojiSmile, BsCamera, BsSend } from "react-icons/bs";
const CommentReply = ({ comment_id }: { comment_id: string }) => {
  const [isCollapse, setCollapse] = useState(false);

  // redux
  const [submitReply] = useSubmitComment_replyMutation();

  //   handle reply comment
  const handlePostReplyComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const replyInput = e.target as HTMLFormElement;
    const reply = (
      replyInput.querySelector('[name="commentbox"]') as HTMLInputElement
    )?.value;

    if (reply?.length > 0) {
      const comment_reply: IComment_reply = {
        comment: comment_id,
        comment_reply: reply,
      };
      await submitReply(comment_reply);
      replyInput.reset();
    }
  };
  return (
    <div className="w-full mt-4 bg-gray-300 rounded-md  transition-all duration-300 ">
      <form
        onClick={() => setCollapse(true)}
        onSubmit={handlePostReplyComment}
        className={`${!isCollapse && "flex justify-between items-center p-2"}`}
      >
        <input
          required
          name="commentbox"
          className="outline-none w-full p-2 text-sm bg-gray-300 rounded-md "
          placeholder="Write your reply..."
        />

        <div
          className={`flex w-full justify-between  items-center gap-2 p-2 ${!isCollapse && "hidden"}`}
        >
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

        <button
          type="submit"
          className={`px-4 py-2 rounded-lg bg-violet-500  font-semibold text-white hover:bg-violet-800 ${isCollapse && "hidden"}`}
        >
          <BsSend />
        </button>
      </form>
    </div>
  );
};

export default CommentReply;
