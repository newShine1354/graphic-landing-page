"use client";
import Navbar from "@/components/Navbar";
import PageOne from "@/components/PageOne";
import ShowCase from "@/components/showcase/ShowCase";
import Skills from "@/components/skills/Skills";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { transform } from "next/dist/build/swc/generated-native";
import ContactUs from "@/components/contact-us/ContactUs";

export default function Home() {
  const [cursorCoordinates, setCursorCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const mouseMove = (e: any) => {
    setCursorCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const variants = {
    default: {
      x: cursorCoordinates.x - 16,
      y: cursorCoordinates.y - 16,
    },
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className="">
      <Navbar />
      <PageOne />
      <Skills />
      <ShowCase />
      {/* <motion.div
        className="bg-primary h-8 w-8 rounded-full fixed top-0 left-0"
        variants={variants}
        animate="default"
        transition={{ duration: 0.2, ease: "easeInOut" }}
      /> */}
      <ContactUs />
    </div>
  );
}
