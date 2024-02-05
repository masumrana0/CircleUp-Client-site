"use client";
import React from "react";
import "../../../Components/home/home.modules.css";
import LeftSideBar from "../../../Components/home/LeftSideBar";
import MainFeed from "../../../Components/home/MainFeed";
import RightSideBar from "../../../Components/home/RightSideBar";

const AfterLoginHomePage = () => {
  return (
    <div>
      <section className="w-full lg:max-w-[1400px] mx-auto pt-4 ">
        <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 gap-4">
          <div className="hidden lg:block lg:col-span-1 md:col-span-1 sticky top-0 h-[90vh]">
            <LeftSideBar />
          </div>
          <div className="lg:col-span-3 md:col-span-1">
            <MainFeed />
          </div>
          <div className="hidden lg:block lg:col-span-1 md:col-span-1 sticky top-0 h-[90vh]">
            <RightSideBar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AfterLoginHomePage;
