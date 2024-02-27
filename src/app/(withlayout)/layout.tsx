"use client";
import { useAppSelector } from "@/Redux/hooks";
import Navbar from "../../Components/navbar/Navbar";
import React from "react";

const AfterLoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="bg-[#f4f4f4]">{children}</div>
    </>
  );
};

export default AfterLoginLayout;
