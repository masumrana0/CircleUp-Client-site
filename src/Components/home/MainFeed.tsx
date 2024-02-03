import React from "react";
import FeedCard from "./shared/FeedCard";
import FeedPostCard from "./shared/FeedPostCard";
import { useGetAllPostQuery } from "@/Redux/api/postApi";
import { IPost } from "@/types/newsfeed";

const MainFeed = () => {
  const { data: allPost } = useGetAllPostQuery(null);

  return (
    <section className="">
      <div className="  min-h-[90vh] overflow-auto  ">
        <div className="bg-white  rounded-md">
          <FeedPostCard />
        </div>
        <div>
          {allPost?.map((post: IPost) => (
            <FeedCard key={post?.user} data={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainFeed;
