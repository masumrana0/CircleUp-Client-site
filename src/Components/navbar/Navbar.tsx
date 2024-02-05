import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <div>
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
      <div className="lg:hidden pt-2">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
