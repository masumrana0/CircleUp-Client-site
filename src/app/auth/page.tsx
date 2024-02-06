/**
 * Title: 'Fontend Authenticaion page design By Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 26-01-2024
 *
 */

"use client";
import React from "react";

import homePageImage from "/public/welcoming/loginHome.jpg";
import Login from "@/Components/authentication/Login";

import Register from "@/Components/authentication/Register";
import { useAppSelector } from "@/Redux/hooks";
import Image from "next/image";

const Authentication = () => {
  // reduẋ
  const authState = useAppSelector((state) => state.authSlice.authState);

  return (
    <div className="flex justify-between bg-black items-center h-[100vh] overflow-hidden gap-6">
      <div className="lg:flex-1 hidden lg:flex">
        <Image src={homePageImage} alt="loginHome" />
      </div>
      <div className="flex-1 px-4">{authState ? <Login /> : <Register />}</div>
    </div>
  );
};

export default Authentication;
