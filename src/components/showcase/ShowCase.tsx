"use client";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import image from "@/utils/images/cartoon-character-generated-by-Fotor-ai-art-creator.webp";
import image2 from "@/utils/images/Combined-2.webp";
import useMeasure from "react-use-measure";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion";

const data = [
  {
    img: image,
    text: "",
  },
  {
    img: image2,
    text: "",
  },
  {
    img: image,
    text: "",
  },
  {
    img: image2,
    text: "",
  },
  {
    img: image,
    text: "",
  },
  {
    img: image2,
    text: "",
  },
  {
    img: image,
    text: "",
  },
  {
    img: image2,
    text: "",
  },
  // {
  //   img: image,
  //   text: "",
  // },
  // {
  //   img: image,
  //   text: "",
  // },
  // {
  //   img: image,
  //   text: "",
  // },
  // {
  //   img: image,
  //   text: "",
  // },
  // {
  //   img: image,
  //   text: "",
  // },
  // {
  //   img: image,
  //   text: "",
  // },
  // {
  //   img: image,
  //   text: "",
  // },
  // {
  //   img: image,
  //   text: "",
  // },
  // {
  //   img: image,
  //   text: "",
  // },
  // {
  //   img: image,
  //   text: "",
  // },
  // {
  //   img: image,
  //   text: "",
  // },
  // {
  //   img: image,
  //   text: "",
  // },
];

const ShowCase = () => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;
  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 16;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete() {
          setMustFinish(false);
          setRerender(!rerender);
        },
        // repeat: Infinity,
        // repeatType: "loop",
        // repeatDelay: 0,
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
  }, [xTranslation, width, duration, rerender]);

  return (
    <div className="py-8 bg-red-700 h-72 my-24">
      <motion.div
        className="absolute left-0 flex gap-20"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setDuration(SLOW_DURATION);
          setMustFinish(true);
        }}
        onHoverEnd={() => {
          setDuration(FAST_DURATION);
          setMustFinish(true);
        }}
      >
        {[...data, ...data].map((item, i) => (
          <Item src={item?.img} text={item.text} key={i} />
        ))}
      </motion.div>
    </div>
  );
};

export default ShowCase;
