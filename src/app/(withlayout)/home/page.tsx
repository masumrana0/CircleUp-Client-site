"use client";
import React from "react";
import "../../../Components/home/home.modules.css";
import LeftSideBar from "../../../Components/home/LeftSideBar";
import MainFeed from "../../../Components/home/MainFeed";
import RightSideBar from "../../../Components/home/RightSideBar";
import MobileStory from "@/Components/home/MobileStory";
import { useAppSelector } from "@/Redux/hooks";

const AfterLoginHomePage = () => {
  // const theme = useAppSelector((state) => state.themeSlice.theme);
  const theme = "light";
  return (
    <div>
      <section
        className={`${theme === "light" ? "bg-[#f4f4f4]" : "bg-[#303b4f]"} w-full lg:max-w-[1400px] mx-auto pt-2 lg:pt-24 `}
      >
        <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 gap-4">
          <div className="hidden md:block lg:block lg:col-span-1 md:col-span-1  sticky top-24 h-[50vh] z-20">
            <LeftSideBar />
          </div>
          <div className="block md:hidden lg:hidden  ">
            <div className="flex mb-2 gap-3 px-2 overflow-x-auto ">
              <MobileStory name="Story" me={true} />
              <MobileStory name="Samad.." />
              <MobileStory name="Kobir" />
              <MobileStory name="Nuha.." />
              <MobileStory name="Evana" />
              <MobileStory name="John" />
              <MobileStory name="John" />
              <MobileStory name="John" />
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-1">
            <MainFeed />
          </div>
          <div className="hidden md:block lg:block lg:col-span-1 md:col-span-1 sticky top-24 h-[50vh] z-20">
            <RightSideBar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AfterLoginHomePage;
