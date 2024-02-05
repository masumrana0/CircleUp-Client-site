import React, { useState } from "react";
import Image from "next/image";

import LeftSideNavBar from "./components/LeftSideNavBar";
import MobileNavRight from "./components/MobileNavRight";
import Link from "next/link";
import { Divider } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoMdHelpBuoy } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import DarkmodeToggle from "./components/DarkmodeToggle";

const logo: string = "/logo.jpg";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex relative flex-col   px-1 gap-2">
      <div className="flex justify-between items-center">
        <div className=" flex lg:hidden p-1 rounded  gap-2 items-center justify-center">
          <Image
            src={logo}
            alt="profile picture "
            width={30}
            height={30}
            className="rounded-full"
          />
          <Link
            href="/home"
            className="text-md text-violet-600 font-black font_montserrat"
          >
            CircleUp
          </Link>
          {/* <div className="hidden md:block">
          <NavbarSearchBar />
        </div> */}
        </div>
        <div>
          <GiHamburgerMenu
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl cursor-pointer z-50 "
          />
          <div className=" ">
            {isOpen ? (
              <>
                <div className="bg-gray-200 absolute top-10 h-[94vh] left-0 w-full  rounded-md p-3 z-10">
                  <div className="flex flex-col">
                    {/* Profile  */}
                    <div>
                      <div className=" hover:bg-slate-100 p-2 rounded-md cursor-pointer flex justify-between items-center gap-2">
                        <p className="text-sm">Theme</p>
                        <DarkmodeToggle />
                      </div>
                      <Divider className="my-2" />
                    </div>
                    {/* Profile  */}
                    <div>
                      <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
                        <CgProfile className="" />
                        <p className="text-sm">Profile</p>
                      </div>
                      <Divider className="my-2" />
                    </div>
                    {/* Setting */}
                    <div>
                      <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
                        <IoSettings className="" />
                        <p className="text-sm">Setting</p>
                      </div>
                      <Divider className="my-2" />
                    </div>
                    {/* Help */}
                    <div>
                      <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
                        <IoMdHelpBuoy className="text-xl" />
                        <p className="text-sm">Help</p>
                      </div>
                      <Divider className="my-2" />
                    </div>
                    {/* Logout */}
                    <div>
                      <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer  items-center gap-2">
                        <RiLogoutCircleLine className="text-xl" />
                        <p className="text-sm">Logout</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div>
        <div>
          <LeftSideNavBar />
          {/* <Divider className="m-0" /> */}
          <hr className="mt-2" />
        </div>

        {/* <div>
          <MobileNavRight />
        </div> */}
      </div>
      {/*
     
       */}
    </div>
  );
};

export default MobileNavbar;
