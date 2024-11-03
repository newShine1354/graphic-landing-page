"use client";
import { motion } from "framer-motion";
import React from "react";
import img from "@/utils/images/Combined-2.webp";
import Image from "next/image";
const data = [
  {
    img: img,
    heading: "Short Form Video Editing",
    content:
      "Nail your Reels, TikToks and YouTube shorts to optimize engagement and shareability.",
  },
  {
    img: img,
    heading: "Long Form Video Editing",
    content:
      "YouTube videos made more entertaining than ever for longer watch-time and more subs.",
  },
  {
    img: img,
    heading: "Thumbnail Design",
    content:
      "Upto 78% higher click-through rates with inviting graphics that lead to more views.",
  },
  {
    img: img,
    heading: "YouTube Channel Management",
    content:
      "End-to-end growth strategy, SEO, maintenance and analytics to grow your channel. ",
  },
];
const Skills = () => {
  return (
    <div className="grid grid-cols-4 px-40 gap-10 text-center">
      {data.map((item, i) => (
        <div className="flex flex-col items-center gap-3" key={i}>
          <Image src={item.img} alt="skills" className="h-40 w-40" />
          <h3 className="">{item.heading}</h3>
          <p className="">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
