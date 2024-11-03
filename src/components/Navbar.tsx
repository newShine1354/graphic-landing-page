import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/utils/images/praper-logo.png";
import Button from "./common/NavButton";

const data = [
  { text: "Home", href: "/home" },
  { text: "About", href: "/about" },
  { text: "Case Studies", href: "/case-studies" },
  { text: "Services", href: "/services" },
  { text: "Join Us", href: "/join-us" },
  { text: "FAQs", href: "/join-us" },
];
const Navbar = () => {
  return (
    <div className="py-5 flex items-center justify-between max-w-[1080px] m-auto border-b border-gray-300">
      <div className="">
        <Image src={logo} alt="logo" className="h-16 w-auto" />
      </div>
      <div className="flex gap-10">
        {data.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            {item.text}
          </Link>
        ))}
      </div>
      <Button />
      <div className=""></div>
    </div>
  );
};

export default Navbar;
