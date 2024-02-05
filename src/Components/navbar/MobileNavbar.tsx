import React from "react";
import Image from "next/image";

import LeftSideNavBar from "./components/LeftSideNavBar";
import MobileNavRight from "./components/MobileNavRight";

const logo: string = "/logo.jpg";

const MobileNavbar = () => {
  return (
    <div className="flex justify-between items-center px-1">
      <div className="w-[40px] h-[40px] bg-violet-500 p-1 rounded">
        <Image
          src={logo}
          alt="profile picture "
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div>
        <LeftSideNavBar />
      </div>
      <div>
        <MobileNavRight />
      </div>
    </div>
  );
};

export default MobileNavbar;
