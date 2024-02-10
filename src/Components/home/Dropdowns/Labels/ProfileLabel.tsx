import DarkmodeToggle from "@/Components/navbar/components/DarkmodeToggle";
import { Divider } from "antd";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoMdHelpBuoy } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";

const ProfileLabel = () => {
  const handleSelectClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    // Stop the click event propagation to prevent the dropdown from closing
    e.stopPropagation();
  };

  return (
    <div className="bg-gray-200 rounded-md p-3 " onClick={handleSelectClick}>
        
      <div className="flex flex-col">
        {/* Theme  */}
        <div>
          <div className="hover:bg-slate-100 p-2 rounded-md cursor-pointer flex justify-between items-center gap-4 ">
            <p className="text-sm">Theme</p>
            <DarkmodeToggle />
          </div>
          <Divider className="my-2" />
        </div>
        {/* Profile  */}
        <div>
          <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
            <CgProfile className="" />
            <Link href="/profile" className="text-sm">
              Profile
            </Link>
          </div>
          <Divider className="my-2" />
        </div>
        {/* Setting */}
        <div>
          <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
            <IoSettings className="" />
            <Link href="/setting" className="text-sm">
              Setting
            </Link>
          </div>
          <Divider className="my-2" />
        </div>
        {/* Help */}
        <div>
          <div className="flex hover:bg-slate-100 p-2 rounded-md cursor-pointer items-center gap-2">
            <IoMdHelpBuoy className="text-xl" />
            <Link href="/help" className="text-sm">
              Help
            </Link>
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
  );
};

export default ProfileLabel;
