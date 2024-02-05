/**
 * Title: 'DesktopNavbar navbar define by Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 29-01-2024
 */

"use client";
import React, { useState } from "react";
import LeftSideNavBar from "./components/LeftSideNavBar";
import RightSideNavbar from "./components/RightSideNavbar";
import Image from "next/image";
import logo from "/public/logo.jpg";
import NavbarSearchBar from "./components/NavbarSearchBar";
import Link from "next/link";

const DesktopNavbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between gap-5 shadow-lg px-10 items-center py-3 bg-white">
      <div className="w-[60px] hidden md:block p-1 rounded lg:flex gap-2 items-center">
        <Image
          src={logo}
          alt="profile picture "
          width={50}
          height={50}
          className="rounded-full"
        />
        <Link
          href="/home"
          className="text-xl text-violet-600 font-black font_montserrat"
        >
          CircleUp
        </Link>
        {/* <div className="hidden md:block">
          <NavbarSearchBar />
        </div> */}
      </div>

      <nav className="flex">
        <LeftSideNavBar />
      </nav>
      <nav>
        <RightSideNavbar />
      </nav>
    </header>
  );
};

export default DesktopNavbar;
