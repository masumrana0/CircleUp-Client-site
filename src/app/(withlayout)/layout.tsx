"use client";
import Navbar from "../../Components/navbar/Navbar";
import React from "react";

const AfterLoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default AfterLoginLayout;
