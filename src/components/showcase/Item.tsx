"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

const Item = ({ src, text }: { src: any; text: string }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        className="relative overflow-hidden h-52 w-52 bg-slate-400 flex justify-center items-center"
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
      >
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black opacity-50 h-full w-full pointer-events-none" />
            <motion.h1
              className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75 "
              intial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span>Explore more</span>
            </motion.h1>
          </motion.div>
        )}
        <div className="">
          <Image src={src} alt="kdk" style={{ objectFit: "cover" }} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Item;
