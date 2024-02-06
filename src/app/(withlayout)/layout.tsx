"use client";
import { useAppSelector } from "@/Redux/hooks";
import Navbar from "../../Components/navbar/Navbar";
import React from "react";

const AfterLoginLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useAppSelector((state) => state.themeSlice.theme);
  return (
    <>
      <Navbar />
      <div className={`${theme === "light" ? "bg-[#303b4f]" : "bg-[#f4f4f4]"}`}>
        {children}
      </div>
    </>
  );
};

export default AfterLoginLayout;
