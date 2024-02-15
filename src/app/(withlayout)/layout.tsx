"use client";
import { useAppSelector } from "@/Redux/hooks";
import Navbar from "../../Components/navbar/Navbar";
import React from "react";

const AfterLoginLayout = ({ children }: { children: React.ReactNode }) => {
  // const theme = useAppSelector((state) => state.themeSlice.theme);
  const theme = "light";
  return (
    <>
      <Navbar />
      <div
        className={`${theme === "light" ? "bg-[#f4f4f4]" : " bg-[#303b4f]"}`}
      >
        {children}
      </div>
    </>
  );
};

export default AfterLoginLayout;
