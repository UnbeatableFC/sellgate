import React from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-sellgate-red text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="size-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="size-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="size-4" />
          </a>
        </div>
        <div className="text-sm text-center grow">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>
        <div className="text-sm hidden md:block">
            <a href="tel:+2347032191259" className="hover:text-gray-300">
                +234 (0) 703-2191-259
            </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
