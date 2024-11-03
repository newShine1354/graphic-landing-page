import Image from "next/image";
import React from "react";
import rightArrow from "@/utils/icons/rightArrow.svg";

const NavButton = () => {
  return (
    <button className="py-2 px-5 text-[17px] flex items-center bg-[#eb0830] gap-2 rounded-full">
      <span className="font-bold text-white">Get in touch</span>
      <Image src={rightArrow} alt="arrow" className="h-4 w-4" />
    </button>
  );
};

export default NavButton;
