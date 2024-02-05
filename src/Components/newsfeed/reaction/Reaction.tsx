/**
 * Title: 'Reaction ui define by Masum Rana '
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 04-02-2024
 *
 */

"use client";
import React, { useState } from "react";
import love from "/public/assets/reaction/love.png";
import sad from "/public/assets/reaction/sad.png";
import wow from "/public/assets/reaction/wow.png";
import angry from "/public/assets/reaction/angry.png";
import haha from "/public/assets/reaction/ha.png";
import Image from "next/image";
import like from "/public/assets/reaction/like (1).png";
import { useSubmitReactionMutation } from "@/Redux/api/reactionApi";
import { useAppSelector } from "@/Redux/hooks";
import { IReaction } from "@/types/newsfeed";
import { useDispatch } from "react-redux";
import { setPostId } from "@/Redux/Slices/unitlitySlice";

const ReactionLabel = () => {
  // redux
  const dispatch = useDispatch();
  const [submitReaction] = useSubmitReactionMutation();
  const { post } = useAppSelector((state) => state.utilitySlice);
  // console.log(post);

  const handleSubmitReaction = async (
    React: "like" | "love" | "haha" | "sad" | "wow" | "angry"
  ) => {
    // setReact(React);
    // console.log(React);
    if (React.length >= 2 && post.length >= 5) {
      const reaction: IReaction = {
        post: post,
        reaction: React,
      };

      console.log(reaction);

      const res = await await submitReaction(reaction);
      // if (res?.data) {

      // }
      // dispatch(setPostId(""));
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <button onClick={() => handleSubmitReaction("like")}>
        <Image
          src={like}
          width={20}
          alt="reaction-icon"
          className="hover:w-[40px] transion-all duration-300"
        />
      </button>
      <button onClick={() => handleSubmitReaction("love")}>
        <Image
          src={love}
          width={20}
          alt="reaction-icon"
          className="hover:w-[40px] transion-all duration-300"
        />
      </button>
      <button onClick={() => handleSubmitReaction("haha")}>
        <Image
          src={haha}
          width={20}
          alt="reaction-icon"
          className="hover:w-[40px] transion-all duration-300"
        />
      </button>
      <button onClick={() => handleSubmitReaction("sad")}>
        <Image
          src={sad}
          width={20}
          alt="reaction-icon"
          className="hover:w-[40px] transion-all duration-300"
        />
      </button>
      <button onClick={() => handleSubmitReaction("wow")}>
        <Image
          src={wow}
          width={20}
          alt="reaction-icon"
          className="hover:w-[40px] transion-all duration-300"
        />
      </button>
      <button onClick={() => handleSubmitReaction("angry")}>
        <Image
          src={angry}
          width={20}
          alt="reaction-icon"
          className="hover:w-[40px] transion-all duration-300"
        />
      </button>
    </div>
  );
};

export default ReactionLabel;
