"use client";
import ProfileAbout from "@/Components/profile/About";
import Friends from "@/Components/profile/Friends";
import ProfilePhotos from "@/Components/profile/Photos";
import ProfilePosts from "@/Components/profile/Posts";
import ProfileVideos from "@/Components/profile/Videos";
import { Avatar, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import { profileMenuItems } from "@/constants/profileMenu";
import Image from "next/image";
import React, { useState } from "react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<any>(profileMenuItems[0].key);
  // console.log(activeTab);
  const handleMenuClick = (itemId: any) => {
    setActiveTab(itemId);
  };
  return (
    <section className="container mx-auto pt-4 lg:pt-20  min-h-screen">
      <div className="bg-gray-400 h-[300px] overflow-hidden flex justify-center items-center rounded-md">
        {/* <h1 className="  h-[200px]  w-full ">Image</h1> */}
        <img
          className=" w-full"
          src="https://scontent.fotp3-3.fna.fbcdn.net/v/t39.30808-6/359226390_801311478167135_5110621524986646370_n.jpg?stp=dst-jpg_p480x480&_nc_cat=101&ccb=1-7&_nc_sid=783fdb&_nc_ohc=-SXRfL7VvG8AX9vMqdp&_nc_ht=scontent.fotp3-3.fna&oh=00_AfCOWNpBvufuFz0LcS3pbr4q2ZbqJBxIpaIegEh3b64YnA&oe=65CCFFF5"
          alt=""
        />
      </div>
      <div className="flex justify-between  items-center ">
        <div className="flex gap-4  items-center">
          <Avatar className="w-28 h-28 -mt-5  border-4 border-gray-400">
            <AvatarImage src="https://avatars.githubusercontent.com/u/108287611?v=4" />
          </Avatar>
          <div className="flex flex-col ">
            <h1 className="text-xl font-bold">Masum Rana</h1>
            <div className="flex gap-2">
              <h1>10 Followers</h1>
              <h1>1 Following</h1>
            </div>
          </div>
        </div>
        <Button>Edit</Button>
      </div>
      <hr className=" mt-4" />
      <div>
        <div className="flex flex-wrap gap-4 mt-2 ">
          <div className=" flex flex-wrap gap-4 justify-center items-center ">
            {profileMenuItems.map((item) => (
              <>
                <span
                  key={item.key}
                  className={`tab transition tab-lifted  cursor-pointer  p-2 text-sm text-md font-bold  ${
                    activeTab === item.key
                      ? " duration-200 tab-active border-violet-600 border-b-2  text-violet-600 "
                      : ""
                  }`}
                  onClick={() => handleMenuClick(item.key)}
                >
                  {item.value}
                </span>
              </>
            ))}
          </div>
        </div>
      </div>
      {/* Conditionally rendering components based on active tabs */}
      <div>
        {activeTab === 1 ? (
          <ProfilePosts />
        ) : activeTab === 2 ? (
          <ProfileAbout />
        ) : activeTab === 3 ? (
          <Friends />
        ) : activeTab === 4 ? (
          <ProfilePhotos />
        ) : activeTab === 5 ? (
          <ProfileVideos />
        ) : null}
      </div>
    </section>
  );
};

export default ProfilePage;
