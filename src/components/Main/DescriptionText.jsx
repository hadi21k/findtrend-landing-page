import {
  motion,
  useElementScroll,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

const DescriptionText = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const fadeIn = useTransform(
    scrollYProgress,
    [1, 0.5],
    ["#adadad", "#000000"]
  );

  const fadeOut = useTransform(
    scrollYProgress,
    [1, 0.6],
    ["#000000", "#adadad"]
  );

  return (
    <div ref={ref} className="overflow-y-hidden bg-white text-black">
      <div className="container mx-auto grid min-h-[400px] place-items-center text-4xl font-bold">
        <motion.h1 className="max-w-5xl max-sm:p-6">
          <motion.span style={{ color: fadeOut }}>
            Findtrend helps you to increase your productivity and reduce your
            computer's memory load,{" "}
          </motion.span>
          <motion.span className="text-gray-2" style={{ color: fadeIn }}>
            an application that can fulfill your daily browsing needs.
          </motion.span>
        </motion.h1>
      </div>
    </div>
  );
};

export default DescriptionText;
