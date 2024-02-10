"use client";
import React from "react";
import FeedCard from "./shared/FeedCard";
import FeedPostCard from "./shared/FeedPostCard";
import { useGetAllPostQuery } from "@/Redux/api/postApi";
import { IPost } from "@/types/newsfeed";
import Loading from "@/app/loading";

const MainFeed = () => {
  const { data: allPost, isLoading } = useGetAllPostQuery(null);

  return (
    <section className="">
      <div className="  min-h-[90vh] overflow-auto  ">
        <div className=" rounded-md">
          <FeedPostCard />
        </div>
        <div className="flex flex-col mt-4  gap-4">
          {isLoading ? (
            <Loading />
          ) : (
            allPost?.map((post: IPost) => (
              <FeedCard key={post?._id} data={post} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default MainFeed;
