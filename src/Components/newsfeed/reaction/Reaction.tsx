/**
 * Title: 'Reaction ui define by Masum Rana '
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 04-02-2024
 *
 */

"use client";
import React from "react";
import love from "/public/assets/reaction/love.png";
import sad from "/public/assets/reaction/sad.png";
import wow from "/public/assets/reaction/wow.png";
import angry from "/public/assets/reaction/angry.png";
import haha from "/public/assets/reaction/haha.png";
import like from "/public/assets/reaction/like.png";
import Image from "next/image";
import { useAppSelector } from "@/Redux/hooks";
import { IReaction } from "@/types/newsfeed";
import { useSubmitReactionMutation } from "@/Redux/api/reactionApi";

const ReactionLabel = () => {
  // redux
  const [submitReaction] = useSubmitReactionMutation();
  const { post: id } = useAppSelector((state) => state.utilitySlice);

  // handling submit reaction in databse
  const handleSubmitReaction = async (
    reactionType: "like" | "love" | "haha" | "sad" | "wow" | "angry"
  ) => {
    if (id && id.length >= 5) {
      const reaction: IReaction = {
        post: id,
        reaction: reactionType,
      };
      await submitReaction(reaction);
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
